export const findRightText = (texts: any, id: string) => {
  const textObj = texts.value.find((text: any) => {
    return text.label === id;
  });
  return textObj.value || '';
};
