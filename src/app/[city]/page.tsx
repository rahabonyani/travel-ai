const City = ({ params }: { params: { city: string } }) => {
  return  <div>{params.city}</div>;
};

export default City;
