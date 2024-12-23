const URLs = {
  REMINDERS:'reminders' as const,
  REMINDERS_MENU: 'reminders/index' as const,
  ADD_REMINDERS:'reminders/add' as const,
  REPAIRE: 'repaire' as const,
  REPAIRE_MENU: 'repaire/index' as const,
  ADD_OR_EDIT_REPAIRE: 'repaire/add-or-edit' as const,
  REPAIRE_LOCATION: 'repaire/reapire-locataion' as const,
  ROUTES_MENU: 'routes/index' as const,
  ROUTES:'routes' as const,
  ADD_ROUTES:"routes/add" as const 
} as const;

export type URLKeys = typeof URLs[keyof typeof URLs];
export default URLs;