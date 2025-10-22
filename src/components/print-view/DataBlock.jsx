function DataBlock({experienceEntry}) {
  const descList = (experienceEntry.description || "").split("\n").filter(Boolean);


  return (
    <div className="experience-block">
          <p className="company-name">{experienceEntry.companyName}</p>
          <p className="position-title">{experienceEntry.position}</p>
          <p className="dates">{experienceEntry.startDate}{experienceEntry.endDate? " - " + experienceEntry.endDate : experienceEntry.startDate? ' - present' : null }</p>
          <p className="companyLocation">{experienceEntry.companyLocation}</p>
          <ul>
            {descList.length > 0 && descList.map( (entry, index)=> (
              <li key={index}>{entry}</li>
            ))}
          </ul>
    </div>
  )
}

export default DataBlock;