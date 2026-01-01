export default function Home() {
  // console.log('test')

  const renderName = (name2: any) => {
    const name = 'mmad';
    return <span> {name} </span>;
  };
  return (
    <div className="grid  min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>First page</div>
      {renderName(1)}
    </div>
  );
}
