type Blanktype = {
  ph: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

function Blank({ ph, setText }: Blanktype) {
  function onChange(e: any) {
    setText(e.target.value);
  }

  return (
    <textarea
      placeholder={ph}
      className="bg-[#EFEFEF] w-full h-full text-black rounded-xl px-5 pt-3"
      onChange={onChange}
    />
  );
}

export default Blank;
