interface ResultPageProps {
  searchParams: {
    [key: string]: string;
  };
}

export default function ResultPage({ searchParams }: ResultPageProps) {
  return (
    <div>
      <div className="flex flex-row w-full justify-between items-center border-b bg-gray-100 p-2 gap-4">
        <p>Search</p>
        <p>{searchParams.search}</p>
      </div>
      <div className="flex flex-row w-full justify-between items-center border-b bg-gray-100 p-2 gap-4">
        <p>Budget</p>
        <p>{searchParams.budget}</p>
      </div>
      <div className="flex flex-row w-full justify-between items-center border-b bg-gray-100 p-2 gap-4">
        <p>Duration</p>
        <p>{searchParams.duration}</p>
      </div>
      <div className="flex flex-row w-full justify-between items-center border-b bg-gray-100 p-2 gap-4">
        <p>Group type</p>
        <p>{searchParams.groupType}</p>
      </div>
      <div className="flex flex-row w-full justify-between items-center bg-gray-100 p-2 gap-4">
        <p>Activicies</p>
        <p className="w-3/5 text-right">{searchParams.activities}</p>
      </div>
    </div>
  );
}
