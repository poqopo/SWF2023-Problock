import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Select from 'react-select';
import Blank from '@/components/Blank';
import Submit from '@/components/Submit';
import api from '@/api';

type SelectOptionType = { label: string; value: string };

function WriteComplaint() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [part, setPart] = useState({ value: '', label: '' });
  const options = [
    { value: 'Welfare', label: 'Welfare' },
    { value: 'Culture', label: 'Culture' },
    { value: 'Language', label: 'Language' },
    { value: 'Relationship', label: 'Relationship' },
    { value: 'Others', label: 'Others' },
  ];
  const handleSelectionChange = (option: SelectOptionType | null) => {
    if (option) {
      setPart(option);
    }
  };

  function postapi() {
    api
      .post('/add?user_id=3', {
        part: part.value,
        title,
        text,
      })
      .then(function (response) {
        navigate('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function onClick() {
    postapi();
  }

  return (
    <div className="w-full h-screen">
      <div className="p-5">
        <button
          onClick={() => {
            navigate(-1);
          }}
          type="button"
        >
          <IoIosArrowBack size="24px" className="text-[#8B8B8B]" />
        </button>
        <p className="text-2xl font-bold">WRITE PROPOSAL </p>
        <div className="w-full h-[56px] mt-5 mb-4 ">
          <Blank ph="Enter a title" setText={setTitle} />
        </div>
        <div className="w-full h-[240px] mt-5 mb-4 ">
          <Blank ph="Enter text" setText={setText} />
        </div>

        <Select
          className="item"
          placeholder="Choose a category"
          onChange={handleSelectionChange}
          options={options}
        />
      </div>

      <div className="w-full fixed bottom-[83px]">
        <div className="p-5">
          <Submit onClick={() => onClick} />
        </div>
      </div>
      <div className="flex items-center px-5">
        <input
          id="link-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          I request protection of diversity.
        </span>
      </div>
    </div>
  );
}

export default WriteComplaint;
