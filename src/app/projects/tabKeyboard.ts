import type {KeyboardEvent} from 'react';

/**
 * Arrow-key navigation for a role="tablist" (WAI-ARIA tabs pattern, automatic activation).
 * Left/Up and Right/Down move to the previous/next tab and wrap; Home/End jump to the ends.
 * The new tab is focused and clicked, so it is selected as focus moves.
 */
export const handleTabListKeyDown = (event: KeyboardEvent<HTMLElement>) => {
  const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]'));
  const index = tabs.indexOf(event.target as HTMLElement);
  if (index === -1) return;

  const last = tabs.length - 1;
  let next: number;
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      next = index === last ? 0 : index + 1;
      break;
    case 'ArrowLeft':
    case 'ArrowUp':
      next = index === 0 ? last : index - 1;
      break;
    case 'Home':
      next = 0;
      break;
    case 'End':
      next = last;
      break;
    default:
      return;
  }

  event.preventDefault();
  tabs[next].focus();
  tabs[next].click();
};
