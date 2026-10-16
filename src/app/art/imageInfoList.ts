// Keys double as CSS class names, which map each image to a grid-area in styles.css.
const artImages = {
  tree: {path: '/art/tree.webp', name: 'tree', description: ''},
  spiral: {path: '/art/spiral.webp', name: 'spiral', description: ''},
  soulSearching: {path: '/art/soulSearching.webp', name: 'soulSearching', description: ''},
  moon: {path: '/art/moon.webp', name: 'moon', description: ''},
  fish: {path: '/art/fish.webp', name: 'fish', description: ''},
  untitled: {path: '/art/Untitled.webp', name: 'untitled', description: ''},
  desk: {path: '/art/desk.webp', name: 'desk', description: ''},
  self: {path: '/art/self.webp', name: 'self', description: ''},
  shell: {path: '/art/shell.webp', name: 'shell', description: ''},
  city: {path: '/art/city.webp', name: 'city', description: ''},
  bridge: {path: '/art/bridge.webp', name: 'bridge', description: ''},
  arm: {path: '/art/arm.webp', name: 'arm', description: ''},
  kite: {path: '/art/kite.webp', name: 'kite', description: ''},
  existence: {path: '/art/existence.webp', name: 'existence', description: ''},
  searchin: {path: '/art/searchin.webp', name: 'searchin', description: ''},
  turtle: {path: '/art/turtle.webp', name: 'turtle', description: ''},
  // ray: {path: '/art/ray.webp', name: 'ray', description: ''},
  raySelf: {
    path: '/art/ray_pose.webp',
    name: 'raySelf',
    description:
      'Created in Blender, importing 4 procreate drawings I made, and a model of a train underpass.'
  },
  rayDrawing: {path: '/art/ray-drawing.webp', name: 'rayDrawing', description: ''}
} as const;

type ArtImageKey = keyof typeof artImages;

export interface ImageInfo {
  path: string;
  className: ArtImageKey;
  name: string;
  /** Readable name for headings and labels, e.g. 'soulSearching' -> 'Soul Searching'. */
  title: string;
  description: string;
}

const formatTitle = (name: string) =>
  name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (letter) => letter.toUpperCase());

export const imageInfoList: ImageInfo[] = (Object.keys(artImages) as ArtImageKey[]).map((key) => ({
  ...artImages[key],
  className: key,
  title: formatTitle(artImages[key].name)
}));
