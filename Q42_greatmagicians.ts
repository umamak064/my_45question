function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] += " the Great";
    }
  }
  
  const magicians = ["James Randi", "Apollo Robbins", "Harry Houdini"];
  showMagicians(magicians);
  makeGreat(magicians);
  showMagicians(magicians);