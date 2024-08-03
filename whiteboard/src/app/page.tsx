import BoardCreator from "@/features/BoardCreator";

export default function Home() {  
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100%]">
      <BoardCreator />
    </div>
  );
}