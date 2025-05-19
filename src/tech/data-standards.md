---
title: Data standards at dxw
last_reviewed_at: 2025-05-16T17:00:00.000Z
---
In keeping with the GOV.UK [Service Manual](https://www.gov.uk/service-manual/service-standard/point-13-use-common-standards-components-patterns), dxw adheres to relevant open data standards wherever possible. While such standards are often recommended or mandated by government requirements, they are frequently useful in private and third-sector work as well.

## Why standards are important

There are three chief reasons why using data standards makes sense.

First, organisations - and in particular, government - are becoming ever more aware of the importance of data. The advent of machine learning and artificial intelligence technologies, alongside the steadily growing importance of statistics in evidence-driven decision- and policy-making, means that not only survey data, but also routine administrative data, need to be treated as a potentially valuable resource. Care needs to be taken to ensure that data is collected in ways that ensure it is consistent, coherent, and comparable across the whole of UK public services.

Second, the use of data standards supplies us with predefined resources that help us ensure high-quality data collection without the need for expensive, time-consuming, and error-prone research on our part. There is no point in developing, for example, our own set of bands for classifying users by age when [publicly-available standardised sets](https://analysisfunction.civilservice.gov.uk/policy-store/age-and-date-of-birth/) have already been defined for a variety of use-cases. This is particularly the case when collecting data concerning protected characteristics (for example, religion, ethnicity, or sexuality) where understandings evolve over time, categories are sometimes contested, and personal sensitivities are likely to be high. 

Finally, data standards can help systems interoperate, reducing the risk of silos and the need for middleware to bridge gaps in information exchange.

## Which standard to use

Choosing and/or finding a relevant data standard can be difficult. As the old joke goes, _standards are great – that's why there are so many of them_. This is particularly the case in government, where particular ministries or councils will often develop and promote their own bespoke ways to capture data _ad hoc_ or to suit their own very particular needs.

### Mandated standards

For some well-defined areas, the UK Government mandates the use of [particular standards](https://www.gov.uk/government/publications/open-standards-for-government). These are all widely used and well-tested and are suitable for use on almost any project, whether for governmental or other organisations.

### Recommended standards

In addition to mandatory standards, the UK Government also recommends the use of several [metadata standards](https://www.gov.uk/government/publications/recommended-open-standards-for-government) for the description of data. While such metadata standards will not be relevant to every project, their use should be considered whenever data interchange forms a core part of the functionality of an application or service.

Particular attention should be paid to the [recommendation](https://www.gov.uk/government/publications/recommended-open-standards-for-government/describing-restful-apis-with-openapi-3) to use the OpenAPI standard for describing REST APIs.

### GSS harmonised standards

For more complex domains, the [Government Statistical Service](https://analysisfunction.civilservice.gov.uk/) undertakes [ongoing work](https://analysisfunction.civilservice.gov.uk/policy-store/gss-harmonisation-team-workplan/) to provide harmonised data standards which enable improved data consistency and use. In addition, the GSS has prioritised work on some of the most important and sensitive areas of data collection, such as [ethnicity](https://analysisfunction.civilservice.gov.uk/policy-store/ethnicity-harmonised-standard/) and [sexual orientation](https://analysisfunction.civilservice.gov.uk/policy-store/sexual-orientation/). Adopting these standards helps to ensure that we're using the most current and widely-consulted upon terms and definitions in the services we develop. Note further that the GOV.UK Design System bases its [Equality Information pattern](https://design-system.service.gov.uk/patterns/equality-information/) on the harmonised standards.

These [GSS harmonised standards and their accompanying guidance](https://analysisfunction.civilservice.gov.uk/government-statistical-service-and-statistician-group/gss-support/gss-harmonisation-support/harmonised-standards-and-guidance/) should accordingly be our first point of reference when planning data collection, rationalising data stores, or creating comparative data. It will often be possible to support both specialised needs and data standardisation through the creation of consistent data mappings from one to the other. The standards cover a wide range of subjects, from [fear of crime](https://analysisfunction.civilservice.gov.uk/policy-store/crime-and-fear-of-crime/) to [social-capital metrics](https://analysisfunction.civilservice.gov.uk/policy-store/social-capital/), and are potentially applicable to a very wide range of use-cases. 

### Data Standards Authority endorsed standards

The Data Standards Authority reviews standards and controlled vocabularies for use by central government. The Authority maintains a [list of standards](https://alphagov.github.io/data-standards-authority/standards/) they consider valuable for UK government use. These should be applied where relevant.

## When not to use data standards

All standards mandated or recommended by the UK Government have been extensively tested and their value proven 'in the wild'. In the most commonly-encountered scenarios, then, their use provides an easy and effective means of improving data collection for our clients.

Specialised services and applications, however, will often define their own domain-specific data standards, or need to support unique requirements unsuitable for standardisation. For instance, standard age-bandings may not be useful to a service focused on Early Years Foundation Stage (EYFS) education. Here, finer-grained bands are likely to be required.

The standards listed above, in other words, should be treated as sensible defaults, not universal solutions. Be sure to consult with relevant stakeholders before implementing a standard to confirm that it does in fact meet their needs.

### Mapping to existing standards

Note that it will often be possible to support both specialised needs and data standardisation through the creation of consistent data mappings from one to the other. For instance, in the age-banding example given above, care could be taken to ensure that the more-specific groupings needed by the EYFS application fall within the boundaries of one or more of the less-granular standards.

Of course, there will be cases where data collection practices are so customised or specific to a particular domain that no standardisation is possible or desirable. For most use-cases, however, the data standards listed above are likely to be applicable directly as written or as targets for data-mapping.
