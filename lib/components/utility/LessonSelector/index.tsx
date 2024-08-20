import React, { useState, useMemo } from 'react';
import { MdSearch } from 'react-icons/md';
import Pagination from '../Pagination';

interface Author {
  company: string | null;
  headshot?: string | null;
  createdAt: string;
  id: string;
  linkedIn: string;
  name: string;
  title: string;
  updatedAt: string;
}

interface Tag {
  id: string;
  tag: string;
}

interface TagItem {
  tags: Tag;
}

interface Tags {
  items: TagItem[];
}

interface Lesson {
  author: Author[];
  backdate: string;
  content: string;
  createdAt: string;
  id: string;
  objectives: string[];
  screengrab: string | null;
  seoImage: string;
  slug: string;
  tags: Tags;
  title: string;
  type: string;
  subhead: string;
}

interface LessonSelectorProps {
  lessons: Lesson[];
  onSelectionChange?: (selectedLessons: Lesson[]) => void;
}

export const LessonSelector: React.FC<LessonSelectorProps> = ({
  lessons,
  //   onSelectionChange,
}) => {
  const [selectedLessons, setSelectedLessons] = useState<Lesson[]>([]);
  const [isSearchTerm, setIsSearchTerm] = useState<string>('');
  const [isCurrentPage, setIsCurrentPage] = useState(1);
  const [filterSelected, setFilterSelected] = useState(false);

  const GFG = (array: Lesson[], currentPage: number, pageSize: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
  };

  const filteredLessons = useMemo(() => {
    return lessons
      .filter(
        (o) =>
          o.title.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
          o.subhead.toLowerCase().includes(isSearchTerm.toLowerCase())
      )
      .sort(
        (a, b) =>
          new Date(b.backdate ? b.backdate : b.createdAt).getTime() -
          new Date(a.backdate ? a.backdate : a.createdAt).getTime()
      );
  }, [lessons, isSearchTerm]);

  const handleToggleSelect = (lesson: Lesson) => {
    setSelectedLessons((prevSelected) => {
      const isAlreadySelected = prevSelected.some(
        (selectedLesson) => selectedLesson.id === lesson.id
      );
      if (isAlreadySelected) {
        return prevSelected.filter(
          (selectedLesson) => selectedLesson.id !== lesson.id
        );
      } else {
        return [...prevSelected, lesson];
      }

      console.log(selectedLessons);
    });
  };

  const paginatedItems = useMemo(() => {
    if (filteredLessons && !filterSelected) {
      const currentPageData = GFG(filteredLessons, isCurrentPage, 9);
      return currentPageData;
    }

    if (filteredLessons && filterSelected) {
      const currentPageData = GFG(selectedLessons, isCurrentPage, 9);
      return currentPageData;
    }
  }, [filterSelected, filteredLessons, isCurrentPage, selectedLessons]);

  return (
    <div className='p-8 border w-[1024px] bg-neutral-100 border-black rounded-lg shadow-md max-w-5xl'>
      <div className='flex w-full items-end justify-between mb-10'>
        <div className='flex items-center gap-2'>
          <h2 className='h3-base text-base-brand'>Select Lessons</h2>
          <div
            className='bg-black flex items-center px-4 py-1 text-white cursor-pointer'
            onClick={() => setFilterSelected(!filterSelected)}
          >
            {selectedLessons.length} Selected
          </div>
        </div>
        <div className='flex w-1/2 items-center gap-1 border-b border-black px-2 py-1 bg-transparent'>
          <div>
            <MdSearch size={24} color='black' />
          </div>
          <input
            type='text'
            value={isSearchTerm}
            onChange={(e) => setIsSearchTerm(e.target.value)}
            name='search'
            className='focus:border-0 w-full bg-transparent focus:ring-0 ring-0 border-0 pl-2 py-1 placeholder:text-sm'
            placeholder='Search Lessons'
          />
        </div>
      </div>
      {paginatedItems ? (
        <div className='flex flex-col gap-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {paginatedItems.map((lesson) => {
              const isSelected = selectedLessons.some(
                (selectedLesson) => selectedLesson.id === lesson.id
              );
              const lessonDate = new Date(
                lesson.backdate ? lesson.backdate : lesson.createdAt
              ).toDateString();
              return (
                <div
                  key={lesson.id}
                  onClick={() => handleToggleSelect(lesson)}
                  className={`cursor-pointer min-h-[300px] flex flex-col justify-between gap-3 p-4 shadow-md transition-transform transform ${
                    isSelected
                      ? 'bg-base-light border-base-brand border-4'
                      : 'bg-white hover:scale-105 border border-black'
                  }`}
                >
                  <div className='flex flex-col gap-3'>
                    <div className='text-xs font-semibold uppercase text-clemson'>
                      {lessonDate}
                    </div>
                    <h3 className='h4-base'>{lesson.title}</h3>
                    <p className='text-gray-600 text-sm leading-snug line-clamp-4'>
                      {lesson.subhead}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {lesson.author.map((author) => (
                        <div
                          key={author.id}
                          className='flex items-center space-x-4'
                        >
                          <div>
                            <p className='text-xs'>{author.name}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='griditems-start'>
                    <div className='flex flex-wrap gap-1.5 justify-end'>
                      {lesson.tags &&
                        lesson.tags.items.map((t) => (
                          <div key={t.tags.id}>
                            <div className='text-xs uppercase border border-black px-1 py-0.5'>
                              {t.tags.tag}
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='w-full flex justify-center items-center gap-1 mt-3'>
            <Pagination
              totalItems={filteredLessons.length}
              itemsPerPage={12}
              currentPage={1}
              onPageChange={(val) => setIsCurrentPage(val)}
            />
          </div>
        </div>
      ) : (
        <div className='w-full py-24 text-center animate-pulse'>Loading...</div>
      )}
    </div>
  );
};
