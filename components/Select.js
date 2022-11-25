import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineChevronDown } from 'react-icons/hi';

const Select = ({
  container,
  handleClose,
  handleClose2,
  handleCloseAll,
  handleShow,
  show,
}) => {
  return (
    <main
      className={`flex items-center justify-between w-[350px] sm:w-96 border rounded pl-2
      ${show ? 'border-blue-500' : 'border-slate-300 hover:border-slate-400'}`}
    >
      <section className='flex flex-wrap py-1'>
        {container.map((i) => {
          return (
            <div
              key={i}
              className={`flex items-center rounded pl-1.5 space-x-1 ml-1 my-0.5
              ${i === 'Purple' && 'bg-purple-100'}
              ${i === 'Red' && 'bg-red-100'} 
              ${i === 'Green' && 'bg-green-100'} 
              ${i === 'Orange' && 'bg-orange-100'}
              ${i === 'Yellow' && 'bg-yellow-100'}
              ${i === 'Pink' && 'bg-pink-100'}`}
            >
              <p
                className={`text-sm
                ${i === 'Purple' && 'text-purple-600'}
                ${i === 'Red' && 'text-red-600'} 
                ${i === 'Green' && 'text-green-600'} 
                ${i === 'Orange' && 'text-orange-600'}
                ${i === 'Yellow' && 'text-yellow-600'}
                ${i === 'Pink' && 'text-pink-600'}`}
              >
                {i}
              </p>
              <div
                className={`group p-1 cursor-pointer rounded
                ${i === 'Purple' && 'hover:bg-purple-500'}
                ${i === 'Red' && 'hover:bg-red-500'} 
                ${i === 'Green' && 'hover:bg-green-500'} 
                ${i === 'Orange' && 'hover:bg-orange-500'}
                ${i === 'Yellow' && 'hover:bg-yellow-500'}
                ${i === 'Pink' && 'hover:bg-pink-500'}`}
                onClick={() => {
                  handleClose(i);
                  handleClose2;
                }}
              >
                <RiCloseLine
                  className={`text-sm font-extrabold group-hover:text-white
                  ${i === 'Purple' && 'text-purple-600'}
                  ${i === 'Red' && 'text-red-600'} 
                  ${i === 'Green' && 'text-green-600'} 
                  ${i === 'Orange' && 'text-orange-600'}
                  ${i === 'Yellow' && 'text-yellow-600'}
                  ${i === 'Pink' && 'text-pink-600'}`}
                />
              </div>
            </div>
          );
        })}
      </section>
      <section className='flex items-center'>
        {container.length !== 0 && (
          <div className='p-2 group cursor-pointer' onClick={handleCloseAll}>
            <RiCloseLine
              className={`text-lg
            ${
              show
                ? 'text-slate-500'
                : 'text-slate-300 group-hover:text-slate-400'
            }`}
            />
          </div>
        )}
        <div className='w-px h-5 ml-0.5 bg-slate-300'></div>
        <div className='p-2 group cursor-pointer' onClick={handleShow}>
          <HiOutlineChevronDown
            className={`text-lg text-slate-300
            ${
              show
                ? 'text-slate-500'
                : 'text-slate-300 group-hover:text-slate-400'
            }`}
          />
        </div>
      </section>
    </main>
  );
};

export default Select;
