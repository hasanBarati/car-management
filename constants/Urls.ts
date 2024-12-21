const URLs = {
  REPAIRE: '/repaire' as const,
  REPAIRE_MENU: 'repaire/index' as const,
  ADD_OR_EDIT_REPAIRE: 'repaire/add-or-edit' as const,
  REPAIRE_LOCATION: 'repaire/reapire-locataion' as const
} as const;

export type URLKeys = typeof URLs[keyof typeof URLs];
export default URLs;