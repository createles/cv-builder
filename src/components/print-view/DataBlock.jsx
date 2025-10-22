function DataBlock({ title, subtitle, dates, location, descriptionList}) {

  return (
    <div className="data-block">
          {title && <p className="data-title">{title}</p>}
          {subtitle && <p className="data-subtitle">{subtitle}</p>}
          {dates && <p className="data-dates">{dates}</p>}
          {location && <p className="data-location">{location}</p>}
          {descriptionList && descriptionList.length > 0 && (
            <ul>
            {descriptionList.map((entry, index)=> (
              <li key={index}>{entry}</li>
            ))}
          </ul>
          )}
    </div>
  );
}

export default DataBlock;