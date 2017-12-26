export const required = value => (value ? undefined : 'Required')
export const url = value =>
  value && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(value)
    ? 'Invalid web url'
    : undefined
export const castsValidate = value => 
  (!value || !value.length) ? 'At least one cast must be entered' : undefined;
