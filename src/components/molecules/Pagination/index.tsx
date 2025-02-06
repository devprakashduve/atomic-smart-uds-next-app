import React from 'react';
import { PaginationProps } from './PaginationProps.interface';
import './Pagination.css';
import Button from '@/Components/Atoms/Button';

const PaginationButton: React.FC<{
  onClick: () => void;
  disabled: boolean;
  className: string;
  children: React.ReactNode;
}> = ({ onClick, disabled, className, children }) => (
  <Button className={className} onClick={onClick} disabled={disabled}>
    {children}
  </Button>
);

const PageNumberButton: React.FC<{
  page: number;
  currentPage: number;
  onClick: (page: number) => void;
}> = ({ page, currentPage, onClick }) => (
  <Button
    key={page}
    variant="outline"
    className={`${page === currentPage ? 'active' : ''}`}
    onClick={() => onClick(page)}
  >
    {page}
  </Button>
);

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}) => {
  const handleClick = (page: number) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PageNumberButton
          key={i}
          page={i}
          currentPage={currentPage}
          onClick={handleClick}
        />
      );
    }
    return pages;
  };

  return (
    <div className={`pagination-container ${className || ''}`}>
      <PaginationButton
        className="pagination-button previous"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </PaginationButton>
      {renderPageNumbers()}
      <PaginationButton
        className="pagination-button next"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </div>
  );
};

export default Pagination;
