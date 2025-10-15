function ExperienceBlock({experienceEntry}) {
  return (
    <div className="experience-block" key={experienceEntry.id}>
          <p className="company-name">{experienceEntry.companyName}</p>
          <p className="position-title">{experienceEntry.position}</p>
          <p className="dates">{experienceEntry.startDate} - {experienceEntry.endDate}</p>
          <p className="location">{experienceEntry.location}</p>
          <p className="description">{experienceEntry.description}</p>
    </div>
  )
}

export default ExperienceBlock;