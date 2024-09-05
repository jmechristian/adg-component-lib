import React, { useState, useMemo } from 'react';
import { MdSearch } from 'react-icons/md';
import Pagination from '../Pagination';
import { Lesson } from '../../../defs';

interface LessonSelectorProps {
  lessons: Lesson[];
  selected: Lesson[];
  onSelectionChange?: (selectedLessons: Lesson[]) => void;
  onClose?: () => void;
}

export const LessonSelector: React.FC<LessonSelectorProps> = ({
  lessons,
  selected,
  onSelectionChange,
  onClose,
}) => {
  const [selectedLessons, setSelectedLessons] = useState<Lesson[]>(
    selected ? selected : []
  );
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
    });
  };

  const paginatedItems = useMemo(() => {
    if (filteredLessons && !filterSelected) {
      const currentPageData = GFG(filteredLessons, isCurrentPage, 6);
      return currentPageData;
    }

    if (filteredLessons && filterSelected) {
      const currentPageData = GFG(selectedLessons, isCurrentPage, 6);
      return currentPageData;
    }
  }, [filterSelected, filteredLessons, isCurrentPage, selectedLessons]);

  const handleSave = () => {
    if (onSelectionChange) {
      onSelectionChange(selectedLessons);
    }
    onClose && onClose();
  };

  return (
    <div className='p-8 w-[1024px] max-h-[100vh] shadow-xl border-black border-2 overflow-y-scroll scrollbar-hide overflow-x-hidden bg-white max-w-5xl'>
      <div className='flex w-full items-end justify-between mb-10'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-3'>
            <h2 className='h3-base text-base-brand'>Select Lessons</h2>
          </div>
        </div>
        <div className='flex w-2/3 items-center gap-5 bg-transparent'>
          <div className='flex items-center gap-1 border-b border-black flex-1'>
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
          <div className='bg-black flex gap-2 items-center p-2 '>
            <div
              className='cursor-pointer text-white text-sm'
              onClick={() => setFilterSelected(!filterSelected)}
            >
              {selectedLessons.length} Selected
            </div>
            <div
              className='bg-clemson py-1 px-2 text-sm uppercase font-semibold text-white cursor-pointer hover:bg-clemson-dark transition-colors ease-in'
              onClick={handleSave}
            >
              Save & Close
            </div>
          </div>
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
              itemsPerPage={6}
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
