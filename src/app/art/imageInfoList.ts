// Keys double as CSS class names, which map each image to a grid-area in styles.css.
const artImages = {
  tree: {path: '/art/tree.png', name: 'tree', description: ''},
  spiral: {path: '/art/spiral.jpg', name: 'spiral', description: ''},
  soulSearching: {path: '/art/soulSearching.jpg', name: 'soulSearching', description: ''},
  moon: {path: '/art/moon.png', name: 'moon', description: ''},
  fish: {path: '/art/fish.png', name: 'fish', description: ''},
  untitled: {path: '/art/Untitled.png', name: 'untitled', description: ''},
  desk: {path: '/art/desk.png', name: 'desk', description: ''},
  self: {path: '/art/self.png', name: 'self', description: ''},
  shell: {path: '/art/shell.png', name: 'shell', description: ''},
  city: {path: '/art/city.jpg', name: 'city', description: ''},
  bridge: {path: '/art/bridge.png', name: 'bridge', description: ''},
  arm: {path: '/art/arm.png', name: 'arm', description: ''},
  kite: {path: '/art/kite.png', name: 'kite', description: ''},
  existence: {path: '/art/existence.jpg', name: 'existence', description: ''},
  searchin: {path: '/art/searchin.png', name: 'searchin', description: ''},
  turtle: {path: '/art/turtle.png', name: 'turtle', description: ''},
  // ray: {path: '/art/ray.png', name: 'ray', description: ''},
  raySelf: {path: '/art/ray_pose.png', name: 'raySelf', description: ''}
} as const;

type ArtImageKey = keyof typeof artImages;

export interface ImageInfo {
  path: string;
  className: ArtImageKey;
  name: string;
  description: string;
}

export const imageInfoList: ImageInfo[] = (Object.keys(artImages) as ArtImageKey[]).map((key) => ({
  ...artImages[key],
  className: key
}));
