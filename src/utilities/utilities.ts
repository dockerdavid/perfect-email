export const concatImage = (url: string, email: string) => {
  return `<img src="${url}/email/track-email/${email}" style="width: 1px; height: 1px; display: none;" />`;
};
