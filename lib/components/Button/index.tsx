import '../../../src/index.css';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className='p-3 bg-black text-white font-bold cursor-pointer'
      {...props}
    >
      Button!
    </button>
  );
}
