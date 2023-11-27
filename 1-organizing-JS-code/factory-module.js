function createUser(name) {
  const userName = "@" + name;

  let reputacion = 0;

  const getReputacion = () => reputacion
  const addReputacion = () => reputacion++;

  return { userName, getReputacion, addReputacion };
}

const josh = createUser("josh");
josh.addReputacion();
josh.addReputacion();


console.log({ username: josh.userName, reputacion: josh.getReputacion() });
