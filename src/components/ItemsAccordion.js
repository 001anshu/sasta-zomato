import SubItem from "./SubItem";
const ItemsAccordion = ({items}) => {
  console.log(items[0].card?.info);
  return (
    <div>
      <div className="">
        {items.map((item) => (
          // {cnsole.log(item.card.info.name)}
          <SubItem key={item.card.info.id} idata={item.card.info} />
        ))}
      </div>
    </div>
  );
};
export default ItemsAccordion;
