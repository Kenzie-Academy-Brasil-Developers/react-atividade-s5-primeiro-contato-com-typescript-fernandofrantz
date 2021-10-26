interface Person {
  name: string;
  age: string;
  hobby: string;
}

interface IList {
  list: Person[];
}

export const Card = ({ list }: IList) => {
  return (
    <>
      <div>
        <ul>
          {list.map((person) => (
            <li>
              <h3>{person.name}</h3>
              <h4>{person.age}</h4>
              <h5>{person.hobby}</h5>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
