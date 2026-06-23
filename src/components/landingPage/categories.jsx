import { FiZap, FiScissors, FiCamera, FiTool, } from 'react-icons/fi';
import './categories.css';
import { LuPaintbrushVertical } from "react-icons/lu";
import { CiPen } from "react-icons/ci";
import { FaBroomBall } from "react-icons/fa6";

const categories = [
  { name: 'Electricians', icon: <FiZap />, bg: '#dee8ff', color: '#2563eb' },
  { name: 'Plumbers', icon: <FiTool />, bg: '#e0f7ff', color: '#06b6d4' },
  { name: 'Tailors', icon: <FiScissors />, bg: '#f3e8ff', color: '#a855f7' },
  { name: 'Photographers', icon: <FiCamera />, bg: '#ffe4e6', color: '#f43f5e' },
  { name: 'Designers', icon: <CiPen />, bg: '#ffedd5', color: '#f97316' },
  { name: 'Carpenters', icon: <FiTool />, bg: '#edfe8a', color: '#e5f509' },
  { name: 'Makeup Artist', icon: <FaBroomBall />, bg: '#fce7f3', color: '#ec4899' },
  { name: 'Cleaners', icon: <LuPaintbrushVertical />, bg: '#dcfce7', color: '#23d364' },
];

const Categories = () => {
  return (
    <section className="categories" id="services">
      <div className="categories-container">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card" style={{ '--card-bg': cat.bg, '--card-color': cat.color }}>
              <div className="category-icon">{cat.icon}</div>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;