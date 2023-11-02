import { useState } from 'react';

export default function CategoryQuestion(){
  const [categories, setCategories] = useState(['']);
  const [items, setItems] = useState([{ name: '', belongsTo: '' }]);

  const addCategory = () => {
    setCategories([...categories, '']);
  };

  const removeCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const addItem = () => {
    setItems([...items, { name: '', belongsTo: '' }]);
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };


  return (
    <div className='p-5'>

        <div className='flex justify-between flex-wrap'>
            <div className='flex gap-3'>
              <img src='../six-dots.png' className='w-[30px]'></img>
              <h1 className='text-2xl text-slate-400 font-semibold my-auto'>Screen 1</h1>
            </div>

            <div className='flex gap-5'>

                  <select className='text-slate-400 outline-none border rounded-md'>
                    <option>Categorization</option>
                    <option>Cloze</option>
                    <option>Comprehension</option>
                  </select>

                  <div className='border border-slae-500 p-2'><img src='../question-mark.png' className='w-[40px]'></img></div>

                  <div className='flex'>
                    <h1 className='text-slate-500 text-xl font-semibold my-auto'>Points</h1>
                    <div className='border-b-2 w-[40px] border-b-black justify-center items-center my-auto'></div>
                  </div>
            </div>
        </div>

        <input type='text' placeholder='Descryption Text' className='w-full p-2 border border-slate-500 outline-none mt-6 rounded-md'></input>

    <div className='p-10'>
      <div className='flex flex-col gap-2 mt-10'>

          <h2 className='text-xl font-medium'>Categories</h2>
          {categories.map((category, index) => (
            <div key={index}>
              <input
                type="text"
                value={category}
                onChange={(e) => handleCategoryChange(index, e.target.value)}
                className='border border-slate-500 outline-none p-2 rounded-md'
                placeholder={"Category" + " " + index}
              />
              <button onClick={() => addCategory()}>+</button>
              {index > 0 && <button onClick={() => removeCategory(index)}>×</button>}
            </div>
          ))}
      </div>

      <div className='flex flex-wrap gap-5 justify-between mt-8'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xl font-medium'>Items</h2>
          {items.map((item, index) => (
            <div key={index} className='flex'>
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                className='border border-slate-500 outline-none p-2 rounded-md'
                placeholder={"Item" + " " + index++}
              />
              <button onClick={() => addItem()}>+</button>
              {index > 0 && <button onClick={() => removeItem(index)}>×</button>}

              </div>
            ))}
        </div>

          <div className='flex flex-col gap-2'>
            <h2 className='text-xl font-medium lg:text-right '>Belongs to</h2>
              {items.map((item, index) => (
                <div key={index}>
                  <select
                    value={item.belongsTo}
                    onChange={(e) => handleItemChange(index, 'belongsTo', e.target.value)}
                    className='border border-slate-500 outline-none p-2 rounded-md'
                  >
                    <option value="">Select Category</option>
                    {categories.map((category, catIndex) => (
                      <option key={catIndex} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
          </div>

        </div>

      </div>
    </div>
  );
}

