function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]): string[] {
    const greatMagicians = [...magicians]; // create a copy of the original array
    for (let i = 0; i < greatMagicians.length; i++) {
      greatMagicians[i] += " the Great";
    }
    return greatMagicians;
  }
  
  const magicians = ["James Randi", "Apollo Robbins", "Harry Houdini"];
  console.log("Original Magicians:");
  showMagicians(magicians);
  
  const greatMagicians = makeGreat(magicians);
  console.log("'the Great'magicians");
  showMagicians(greatMagicians);