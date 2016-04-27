export const SWITCH_TAB = 'SWITCH_TAB';

export function switchTab(index) {
  return {
    type: SWITCH_TAB,
    index: index
  }
}
