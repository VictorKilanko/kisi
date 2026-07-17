"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { toWorld, type EnrichedHotspot, type MapResident } from "@/lib/mapData";

/**
 * The 3D farm — a stylized, fully procedural low-poly world.
 * No external models or textures (original geometry only), `frameloop="demand"`
 * so idle cost is near zero, and the canvas is aria-hidden: the accessible
 * interface is the DOM hotspot list rendered by MapExperience.
 */

const C = {
  grass: "#5c8a4e",
  grassLight: "#6f9c5c",
  path: "#b98a5a",
  earth: "#8a3e1f",
  cream: "#faf5e9",
  wood: "#7a5535",
  woodDark: "#5d4027",
  roof: "#c05621",
  roofDark: "#8a3e1f",
  gold: "#d9a02b",
  indigo: "#23305e",
  green: "#1f5130",
  water: "#4f7f9c",
  panel: "#2b3a55",
  white: "#f5f2ea",
  leaf: "#3f6b35",
  leafDark: "#2e5227",
};

interface Props {
  hotspots: EnrichedHotspot[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  onHover: (name: string | null) => void;
}

export default function FarmMap3D({ hotspots, selectedId, onSelect, onHover }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 46, 58], fov: 42 }}
      dpr={[1, 1.75]}
      frameloop="demand"
      gl={{ antialias: true, powerPreference: "low-power" }}
    >
      <color attach="background" args={["#dbe7d2"]} />
      <ambientLight intensity={0.85} />
      <directionalLight position={[35, 55, 20]} intensity={1.1} />
      <OrbitControls
        target={[0, 0, 0]}
        enableDamping={false}
        minDistance={22}
        maxDistance={95}
        maxPolarAngle={Math.PI * 0.44}
      />

      <Ground />
      <Scenery />

      {hotspots.map((h) => {
        const [wx, wz] = toWorld(h);
        return (
          <group
            key={h.id}
            position={[wx, 0, wz]}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(h.id);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              onHover(h.name);
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              onHover(null);
              document.body.style.cursor = "auto";
            }}
          >
            <HotspotShape kind={h.kind} />
            {h.residents.slice(0, 2).map((r, i) => (
              <ChickenFigure key={r.id} resident={r} offset={i} />
            ))}
            {selectedId === h.id && <SelectionRing />}
          </group>
        );
      })}
    </Canvas>
  );
}

/* ------------------------------------------------------------------ base */

function Ground() {
  return (
    <group>
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.05, 0]}>
        <planeGeometry args={[110, 84]} />
        <meshStandardMaterial color={C.grass} />
      </mesh>
      {/* main path: entrance up the middle */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.001, 16]}>
        <planeGeometry args={[6, 46]} />
        <meshStandardMaterial color={C.path} />
      </mesh>
      {/* cross path along the coop row */}
      <mesh rotation-x={-Math.PI / 2} position={[0, 0.001, 9]}>
        <planeGeometry args={[70, 4]} />
        <meshStandardMaterial color={C.path} />
      </mesh>
    </group>
  );
}

function Scenery() {
  // decorative shade trees + perimeter posts (not interactive)
  const trees: [number, number, number][] = [
    [-38, -24, 1.1],
    [-20, 2, 0.9],
    [16, -20, 1.2],
    [34, -2, 0.8],
    [-44, 18, 1],
    [44, 24, 0.9],
    [8, 30, 0.85],
  ];
  return (
    <group>
      {trees.map(([x, z, s], i) => (
        <Tree key={i} position={[x, 0, z]} scale={s} />
      ))}
    </group>
  );
}

function Tree({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 1.6, 0]}>
        <cylinderGeometry args={[0.35, 0.55, 3.2, 6]} />
        <meshStandardMaterial color={C.woodDark} flatShading />
      </mesh>
      <mesh position={[0, 4.2, 0]}>
        <coneGeometry args={[2.6, 3.4, 7]} />
        <meshStandardMaterial color={C.leaf} flatShading />
      </mesh>
      <mesh position={[0, 6, 0]}>
        <coneGeometry args={[1.7, 2.4, 7]} />
        <meshStandardMaterial color={C.leafDark} flatShading />
      </mesh>
    </group>
  );
}

function SelectionRing() {
  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, 0.06, 0]}>
      <ringGeometry args={[4.2, 4.9, 40]} />
      <meshBasicMaterial color={C.gold} />
    </mesh>
  );
}

function ChickenFigure({ resident, offset }: { resident: MapResident; offset: number }) {
  const x = 3.2 + offset * 1.6;
  const z = 2.6 - offset * 1.2;
  return (
    <group position={[x, 0, z]} scale={0.8}>
      {/* body */}
      <mesh position={[0, 0.55, 0]} scale={[1, 0.85, 1.25]}>
        <sphereGeometry args={[0.55, 10, 8]} />
        <meshStandardMaterial color={resident.body} flatShading />
      </mesh>
      {/* head */}
      <mesh position={[0, 1.15, 0.5]}>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshStandardMaterial color={resident.body} flatShading />
      </mesh>
      {/* comb */}
      <mesh position={[0, 1.45, 0.5]}>
        <coneGeometry args={[0.14, 0.3, 5]} />
        <meshStandardMaterial color={resident.comb} flatShading />
      </mesh>
      {/* beak */}
      <mesh position={[0, 1.12, 0.82]} rotation-x={Math.PI / 2}>
        <coneGeometry args={[0.1, 0.28, 5]} />
        <meshStandardMaterial color="#e0a13a" flatShading />
      </mesh>
    </group>
  );
}

/* -------------------------------------------------- building primitives */

function Roof({
  w,
  d,
  h = 1.6,
  y,
  color = C.roof,
}: {
  w: number;
  d: number;
  h?: number;
  y: number;
  color?: string;
}) {
  // 4-sided cone = simple pyramid roof, scaled to the footprint
  return (
    <mesh position={[0, y, 0]} rotation-y={Math.PI / 4} scale={[w / 1.4, h, d / 1.4]}>
      <coneGeometry args={[1, 1, 4]} />
      <meshStandardMaterial color={color} flatShading />
    </mesh>
  );
}

function Box({
  w,
  h,
  d,
  y,
  color,
  x = 0,
  z = 0,
}: {
  w: number;
  h: number;
  d: number;
  y: number;
  color: string;
  x?: number;
  z?: number;
}) {
  return (
    <mesh position={[x, y, z]}>
      <boxGeometry args={[w, h, d]} />
      <meshStandardMaterial color={color} flatShading />
    </mesh>
  );
}

/** Open-sided laying house: slab + corner posts + generous overhanging roof. */
function OpenCoop({ roofColor = C.roof }: { roofColor?: string }) {
  const posts: [number, number][] = [
    [-3.4, -1.9],
    [3.4, -1.9],
    [-3.4, 1.9],
    [3.4, 1.9],
  ];
  return (
    <group>
      <Box w={8} h={0.5} d={4.6} y={0.25} color={C.cream} />
      {posts.map(([x, z], i) => (
        <Box key={i} w={0.3} h={2.6} d={0.3} y={1.8} x={x} z={z} color={C.wood} />
      ))}
      {/* low half-walls suggest open sides for ventilation */}
      <Box w={7} h={0.7} d={0.15} y={0.85} z={-2.1} color={C.wood} />
      <Box w={7} h={0.7} d={0.15} y={0.85} z={2.1} color={C.wood} />
      <Roof w={9.6} d={6} y={3.6} color={roofColor} />
    </group>
  );
}

function HotspotShape({ kind }: { kind: EnrichedHotspot["kind"] }) {
  switch (kind) {
    case "gate":
      return (
        <group>
          <Box w={0.5} h={3.4} d={0.5} y={1.7} x={-3} color={C.green} />
          <Box w={0.5} h={3.4} d={0.5} y={1.7} x={3} color={C.green} />
          <Box w={6.7} h={0.5} d={0.6} y={3.5} color={C.gold} />
          {/* foot-bath */}
          <Box w={3} h={0.15} d={1.6} y={0.08} z={2.2} color={C.water} />
        </group>
      );
    case "coop":
      return <OpenCoop />;
    case "palace":
      return (
        <group>
          <OpenCoop roofColor={C.gold} />
          <Box w={0.15} h={4.6} d={0.15} y={2.3} x={4.4} z={-2} color={C.woodDark} />
          <Box w={1.2} h={0.7} d={0.06} y={4.1} x={5.05} z={-2} color={C.gold} />
        </group>
      );
    case "assembly":
      return (
        <group>
          <Box w={7.5} h={2.6} d={5.5} y={1.3} color={C.cream} />
          <Box w={8.2} h={0.4} d={6.2} y={0.2} color={C.white} />
          <Roof w={9} d={7} y={3.7} h={2} color={C.indigo} />
        </group>
      );
    case "cabinet":
      return (
        <group>
          {[-2.6, 0, 2.6].map((x, i) => (
            <group key={i} position={[x, 0, 0]}>
              <Box w={2} h={1.7} d={2.2} y={0.85} color={C.cream} />
              <Roof w={2.6} d={2.8} h={1} y={2.2} color={C.indigo} />
            </group>
          ))}
        </group>
      );
    case "eggs":
      return (
        <group>
          <Box w={4.5} h={2.2} d={3.5} y={1.1} color={C.white} />
          <Roof w={5.4} d={4.4} h={1.2} y={2.8} color={C.green} />
          <mesh position={[0, 4.1, 0]} scale={[0.8, 1.05, 0.8]}>
            <sphereGeometry args={[0.9, 10, 10]} />
            <meshStandardMaterial color={C.cream} flatShading />
          </mesh>
        </group>
      );
    case "store":
      return (
        <group>
          {/* raised on stub legs against damp and rats */}
          {[
            [-1.6, -1.2],
            [1.6, -1.2],
            [-1.6, 1.2],
            [1.6, 1.2],
          ].map(([x, z], i) => (
            <Box key={i} w={0.4} h={0.9} d={0.4} y={0.45} x={x} z={z} color={C.woodDark} />
          ))}
          <Box w={4.2} h={2} d={3.2} y={1.9} color={C.earth} />
          <Roof w={5} d={4} h={1.2} y={3.5} color={C.roofDark} />
        </group>
      );
    case "tanks":
      return (
        <group>
          <mesh position={[-1.2, 1.6, 0]}>
            <cylinderGeometry args={[1.1, 1.1, 3.2, 12]} />
            <meshStandardMaterial color={C.water} flatShading />
          </mesh>
          <mesh position={[1.4, 1.1, 0.6]}>
            <cylinderGeometry args={[0.85, 0.85, 2.2, 12]} />
            <meshStandardMaterial color={C.white} flatShading />
          </mesh>
        </group>
      );
    case "solar":
      return (
        <group>
          {[-1.9, 1.9].map((x, i) => (
            <group key={i} position={[x, 0, 0]}>
              <Box w={0.25} h={1.4} d={0.25} y={0.7} color={C.woodDark} />
              <mesh position={[0, 1.7, 0]} rotation-x={-0.5}>
                <boxGeometry args={[3.2, 0.12, 2.2]} />
                <meshStandardMaterial color={C.panel} flatShading />
              </mesh>
            </group>
          ))}
        </group>
      );
    case "clinic":
      return (
        <group>
          <Box w={5} h={2.3} d={4} y={1.15} color={C.white} />
          <Roof w={6} d={5} h={1.3} y={2.95} color={C.green} />
          {/* veterinary cross */}
          <Box w={0.35} h={1.1} d={0.2} y={4.1} color={C.gold} />
          <Box w={1.1} h={0.35} d={0.2} y={4.1} color={C.gold} />
        </group>
      );
    case "field":
      return (
        <group>
          <mesh rotation-x={-Math.PI / 2} position={[0, 0.02, 0]}>
            <planeGeometry args={[13, 8.5]} />
            <meshStandardMaterial color={C.grassLight} />
          </mesh>
          {/* touchlines */}
          <Box w={13} h={0.06} d={0.22} y={0.05} z={-4.1} color={C.white} />
          <Box w={13} h={0.06} d={0.22} y={0.05} z={4.1} color={C.white} />
          <Box w={0.22} h={0.06} d={8.4} y={0.05} x={-6.4} color={C.white} />
          <Box w={0.22} h={0.06} d={8.4} y={0.05} x={6.4} color={C.white} />
          {/* goals */}
          {[-6.4, 6.4].map((x, i) => (
            <group key={i} position={[x, 0, 0]}>
              <Box w={0.15} h={1.2} d={0.15} y={0.6} z={-1.2} color={C.white} />
              <Box w={0.15} h={1.2} d={0.15} y={0.6} z={1.2} color={C.white} />
              <Box w={0.15} h={0.15} d={2.5} y={1.2} color={C.white} />
            </group>
          ))}
        </group>
      );
    case "square":
      return (
        <group>
          <Tree position={[0, 0, 0]} scale={1.5} />
          {/* the Reconciliation Bench */}
          <Box w={2.6} h={0.18} d={0.7} y={0.55} x={2.8} z={1.4} color={C.wood} />
          <Box w={0.25} h={0.55} d={0.6} y={0.27} x={1.8} z={1.4} color={C.woodDark} />
          <Box w={0.25} h={0.55} d={0.6} y={0.27} x={3.8} z={1.4} color={C.woodDark} />
        </group>
      );
    case "house":
      return (
        <group>
          <Box w={3} h={1.9} d={2.6} y={0.95} color={C.gold} />
          <Roof w={3.8} d={3.4} h={1.2} y={2.5} color={C.roofDark} />
        </group>
      );
    case "office":
      return (
        <group>
          <Box w={4.4} h={2.3} d={3.4} y={1.15} color={C.cream} />
          <Roof w={5.2} d={4.2} h={1.2} y={2.95} color={C.green} />
        </group>
      );
    case "post":
      return (
        <group>
          <Box w={1.8} h={2.4} d={1.8} y={1.2} color={C.wood} />
          <Roof w={2.4} d={2.4} h={0.9} y={2.9} color={C.roofDark} />
          <Box w={0.15} h={4.5} d={0.15} y={2.25} x={1.4} color={C.woodDark} />
        </group>
      );
    case "channel":
      return (
        <group>
          <Box w={2} h={0.25} d={26} y={0.05} color={C.water} />
          <Box w={0.5} h={0.4} d={26} y={0.15} x={-1.2} color={C.path} />
          <Box w={0.5} h={0.4} d={26} y={0.15} x={1.2} color={C.path} />
        </group>
      );
    case "zone":
      return (
        <group>
          <mesh position={[0, 2.2, 0]}>
            <boxGeometry args={[14, 4.4, 9]} />
            <meshStandardMaterial color={C.gold} transparent opacity={0.22} />
          </mesh>
          <Box w={0.3} h={4} d={0.3} y={2} x={-6.5} z={4} color={C.gold} />
          <Box w={0.3} h={4} d={0.3} y={2} x={6.5} z={-4} color={C.gold} />
        </group>
      );
  }
}
