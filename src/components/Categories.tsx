'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { categoryFilters } from '@/constants';

const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get('category');

  const handleTags = (filter: string) => {
    router.push(`${pathName}?category=${filter}`);
  };

  return (
    <div className="flexBetween w-full gap-5 flex-wrap">
      <ul className="flex gap-2 overflow-auto">
        {categoryFilters.map((category) => (
          <li key={category}>
            <button
              type="button"
              onClick={() => handleTags(category)}
              className={`${
                selectedCategory === category
                  ? 'bg-light-white-300 font-medium'
                  : 'font-normal'
              } px-4 py-3 rounded-lg capitalize whitespace-nowrap`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
