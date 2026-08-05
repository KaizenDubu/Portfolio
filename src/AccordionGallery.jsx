import { useState } from 'react';
import './AccordionGallery.css';

function AccordionGallery({
  items,
  defaultIndex = 2,
  accentColor = '#ffffff',
  overlayColor = '#060010',
  textColor = '#ffffff',
  height = 460,
  gap = 10,
  radius = 16,
  expandRatio = 0.52,
  orientation = 'horizontal',
  showLabels = true,
  grayscale = true,
  className = '',
}) {
  const [active, setActive] = useState(Math.min(Math.max(defaultIndex, 0), items.length - 1));
  const vertical = orientation === 'vertical';
  const expandedGrow = items.length > 1 ? (expandRatio * (items.length - 1)) / (1 - expandRatio) : 1;

  const handleKeyDown = (index, event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      setActive((index + 1) % items.length);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      setActive((index - 1 + items.length) % items.length);
    }
  };

  return (
    <div
      className={`accordion-gallery${vertical ? ' accordion-gallery--vertical' : ''}${className ? ` ${className}` : ''}`}
      style={{
        '--ag-accent': accentColor,
        '--ag-overlay': overlayColor,
        '--ag-text': textColor,
        '--ag-gap': `${gap}px`,
        '--ag-radius': `${radius}px`,
        height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`,
      }}
      role="list"
      aria-label="Experience gallery"
    >
      {items.map((item, index) => {
        const isActive = index === active;
        const Tag = item.link ? 'a' : 'div';

        return (
          <Tag
            key={item.label}
            className={`ag-panel${isActive ? ' ag-panel--active' : ''}`}
            href={item.link || undefined}
            onClick={event => {
              if (!isActive) event.preventDefault();
              setActive(index);
            }}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onKeyDown={event => handleKeyDown(index, event)}
            role="listitem"
            tabIndex={0}
            aria-current={isActive ? 'true' : undefined}
            aria-label={item.label}
            style={{
              flexGrow: isActive ? expandedGrow : 1,
              '--ag-gray': grayscale && !isActive ? 1 : 0,
              '--ag-dim': isActive ? 0 : 0.35,
            }}
          >
            <span className="ag-panel__frame">
              {item.image ? (
                <img className="ag-panel__image" src={item.image} alt={item.alt || item.label} draggable="false" />
              ) : (
                <span className="ag-panel__placeholder" aria-hidden="true">
                  Soon
                </span>
              )}
              <span className="ag-panel__overlay" aria-hidden="true" />
            </span>
            {showLabels && (
              <span className="ag-panel__label" aria-hidden="true">
                <span className="ag-panel__bar" />
                <span className="ag-panel__text">{item.label}</span>
              </span>
            )}
          </Tag>
        );
      })}
    </div>
  );
}

export default AccordionGallery;
