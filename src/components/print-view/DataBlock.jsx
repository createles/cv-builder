function DataBlock({ title, subtitle, dates, location, descriptionList}) {

  return (
    <div className="data-block">
          <div className="block-left-info">
            {title && <p className="data-title">{title}</p>}
            {dates && <p className="data-dates">{dates}</p>}
            {location && <p className="data-location">{location}</p>}
          </div>
          <div className="block-right-info">
            {subtitle && <p className="data-subtitle">{subtitle}</p>}
            {descriptionList && descriptionList.length > 0 && (
              <ul>
              {descriptionList.map((entry, index)=> (
                <li key={index}>{entry}</li>
              ))}
            </ul>
            )}
          </div>
    </div>
  );
}

export default DataBlock;