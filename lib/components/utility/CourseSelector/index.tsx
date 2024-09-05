import React, { useState, useMemo } from 'react';
import { MdSearch } from 'react-icons/md';
import Pagination from '../Pagination';

interface Course {
  id: string;
  courseId: string;
  category: string;
  categoryArray: string[];
  type: string | null;
  cirriculum: {
    nextToken: string | null;
  };
  lmsLessons: {
    nextToken: string | null;
  };
  instructors: {
    nextToken: string | null;
  };
  price: string;
  hours: string;
  lessons: string | null;
  videos: string | null;
  preview: string | null;
  seoImage: string;
  infoSheet: string | null;
  title: string;
  subheadline: string;
  what_learned: string | null;
  objectives: (string | null)[] | null;
  link: string | null;
  trial_link: string | null;
  percentComplete: number | null;
  slug: string;
  collection: (string | null)[] | null;
  demo: boolean | null;
  partOf: string[] | null;
  altLink: string | null;
  shortDescription: string | null;
  subscriptionLink: string | null;
  subscriptionPrice: string | null;
  stripeLink: string | null;
  createdAt: string;
  updatedAt: string;
  studentCourseEnrolledId: string | null;
}

interface CourseSelectorProps {
  courses: Course[];
  selected?: Course[];
  onSelectionChange?: (selectedCourse: Course[]) => void;
  onClose?: () => void;
}

export const CourseSelector: React.FC<CourseSelectorProps> = ({
  selected,
  courses,
  onSelectionChange,
  onClose,
}) => {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>(
    selected ? selected : []
  );
  const [isSearchTerm, setIsSearchTerm] = useState<string>('');
  const [isCurrentPage, setIsCurrentPage] = useState(1);
  const [filterSelected, setFilterSelected] = useState(false);

  const GFG = (array: Course[], currentPage: number, pageSize: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return array.slice(startIndex, endIndex);
  };

  const filteredCourses = useMemo(() => {
    return courses
      .filter(
        (o) =>
          o.title.toLowerCase().includes(isSearchTerm.toLowerCase()) ||
          o.subheadline.toLowerCase().includes(isSearchTerm.toLowerCase())
      )
      .sort((a, b) => a.courseId.localeCompare(b.courseId));
  }, [courses, isSearchTerm]);

  const handleToggleSelect = (course: Course) => {
    setSelectedCourses((prevSelected) => {
      const isAlreadySelected = prevSelected.some(
        (selectedCourse) => selectedCourse.id === course.id
      );
      if (isAlreadySelected) {
        return prevSelected.filter(
          (selectedCourse) => selectedCourse.id !== course.id
        );
      } else {
        return [...prevSelected, course];
      }
    });
  };

  const paginatedItems = useMemo(() => {
    if (filteredCourses && !filterSelected) {
      const currentPageData = GFG(filteredCourses, isCurrentPage, 6);
      return currentPageData;
    }

    if (filteredCourses && filterSelected) {
      const currentPageData = GFG(selectedCourses, isCurrentPage, 6);
      return currentPageData;
    }
  }, [filterSelected, filteredCourses, isCurrentPage, selectedCourses]);

  const handleSave = () => {
    if (onSelectionChange) {
      onSelectionChange(selectedCourses);
    }
    onClose && onClose();
  };

  return (
    <div className='p-8 border max-h-[100vh] overflow-y-scroll overflow-x-hidden scrollbar-hide w-[1000px] bg-white max-w-5xl'>
      <div className='flex w-full items-end justify-between mb-10'>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-3'>
            <h2 className='h3-base text-base-brand'>Select Courses</h2>
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
              placeholder='Search Courses'
            />
          </div>
          <div className='bg-black flex gap-2 items-center p-2 '>
            <div
              className='cursor-pointer text-white text-sm'
              onClick={() => setFilterSelected(!filterSelected)}
            >
              {selectedCourses.length} Selected
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
            {paginatedItems.map((course) => {
              const isSelected = selectedCourses.some(
                (selectedCourse) => selectedCourse.id === course.id
              );

              return (
                <div
                  key={course.id}
                  onClick={() => handleToggleSelect(course)}
                  className={`cursor-pointer min-h-[300px] flex flex-col justify-between gap-3 p-4 shadow-md transition-transform transform ${
                    isSelected
                      ? 'bg-base-light border-base-brand border-4'
                      : 'bg-white hover:scale-105 border border-black'
                  }`}
                >
                  <div className='flex flex-col gap-3'>
                    <div className='text-xs font-semibold uppercase text-clemson'>
                      {course.courseId}
                    </div>
                    <h3 className='h4-base'>{course.title}</h3>
                    <p className='text-gray-600 text-sm leading-snug line-clamp-4'>
                      {course.subheadline}
                    </p>
                  </div>
                  <div className='griditems-start flex justify-between items-end'>
                    <div
                      className='w-32 h-20 bg-black bg-cover bg-center'
                      style={{ backgroundImage: `url(${course.seoImage})` }}
                    ></div>
                    <div className='flex flex-col'>
                      <div className='font-bold text-lg'>${course.price}</div>
                      <div className='flex gap-1.5 font-semibold text-sm text-neutral-500'>
                        <div>{course.hours}</div>Hours
                      </div>
                      <div className='flex gap-1.5 font-semibold text-sm text-neutral-500'>
                        <div>{course.lessons}</div>Lessons
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='w-full flex justify-center items-center gap-1 mt-3'>
            <Pagination
              totalItems={filteredCourses.length}
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
