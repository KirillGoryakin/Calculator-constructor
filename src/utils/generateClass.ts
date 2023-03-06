
type GenerateClass = (...classes: string[]) => string;

export const generateClass: GenerateClass = (...classes) => {
  let className = '';

  classes.forEach(cl => {
    const clName = cl.trim();
    
    if (clName.length > 0) {
      if (className.length === 0) {
        className = clName;
      } else {
        className += ' ' + clName;
      }
    }
  });

  return className;
};