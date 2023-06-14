export const getRandomUsers = async(amount: string | number) => {
  const data = await fetch(`https://randomuser.me/api/?results=${amount}`)
  .then((res) => res.json())
  .catch((e) => "Error" + e)

  return data;
}