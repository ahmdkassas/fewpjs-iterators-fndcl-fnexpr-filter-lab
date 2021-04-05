

function findMatching([...Arry], name){
    return Arry.filter(x => x.toLowerCase() == name.toLowerCase());
  }


function fuzzyMatch([...Arry], name){
    return Arry.filter(x => x.startsWith(name));
  }

function matchName([...Arry], name){
    return Arry.filter(x => x.name === name);
}