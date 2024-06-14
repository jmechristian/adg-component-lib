/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const aPSRegistrantsByEmail = /* GraphQL */ `
  query APSRegistrantsByEmail(
    $email: String!
    $filter: ModelAPSRegistrantFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    aPSRegistrantsByEmail(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        code
        codeRequested
        codeSent
        company
        createdAt
        email
        id
        innovationWorkshop
        name
        phone
        plantTour
        registrationReceived
        speedNetworking
        title
        updatedAt
        welcomeEmailSent
        worksWith
        year
      }
      nextToken
    }
  }
`;
export const aPSSponsorsByAPSId = /* GraphQL */ `
  query APSSponsorsByAPSId(
    $aPSId: ID!
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    aPSSponsorsByAPSId(
      aPSId: $aPSId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        aPS {
          Registrants {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          Speakers {
            items {
              aPSSpeakersId
              bio
              company
              createdAt
              email
              firstName
              headshot
              id
              lastName
              linkedin
              mediaConsent
              phone
              presentationSummary
              presentationTitle
              privacyConsent
              title
              updatedAt
            }
            nextToken
          }
          Sponsors {
            items {
              aPSId
              companyId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          codes {
            code
          }
          createdAt
          id
          updatedAt
          year
        }
        aPSId
        company {
          Employees {
            items {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            nextToken
          }
          apsID {
            items {
              aPSId
              companyId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          city
          createdAt
          email
          id
          name
          phone
          state
          street_1
          street_2
          updatedAt
          website
          zip
        }
        companyId
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const aPSSponsorsByCompanyId = /* GraphQL */ `
  query APSSponsorsByCompanyId(
    $companyId: ID!
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    aPSSponsorsByCompanyId(
      companyId: $companyId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        aPS {
          Registrants {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          Speakers {
            items {
              aPSSpeakersId
              bio
              company
              createdAt
              email
              firstName
              headshot
              id
              lastName
              linkedin
              mediaConsent
              phone
              presentationSummary
              presentationTitle
              privacyConsent
              title
              updatedAt
            }
            nextToken
          }
          Sponsors {
            items {
              aPSId
              companyId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          codes {
            code
          }
          createdAt
          id
          updatedAt
          year
        }
        aPSId
        company {
          Employees {
            items {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            nextToken
          }
          apsID {
            items {
              aPSId
              companyId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          city
          createdAt
          email
          id
          name
          phone
          state
          street_1
          street_2
          updatedAt
          website
          zip
        }
        companyId
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const aPSTicketRegistrantsByEmail = /* GraphQL */ `
  query APSTicketRegistrantsByEmail(
    $email: String!
    $filter: ModelAPSTicketRegistrantFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    aPSTicketRegistrantsByEmail(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        code
        company
        createdAt
        email
        id
        innovationWorkshop
        name
        phone
        plantTour
        registrationReceived
        speedNetworking
        title
        updatedAt
        welcomeEmailSent
        worksWith
        year
      }
      nextToken
    }
  }
`;
export const aPSUsersByAPSId = /* GraphQL */ `
  query APSUsersByAPSId(
    $aPSId: ID!
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    aPSUsersByAPSId(
      aPSId: $aPSId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        aPS {
          Registrants {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          Speakers {
            items {
              aPSSpeakersId
              bio
              company
              createdAt
              email
              firstName
              headshot
              id
              lastName
              linkedin
              mediaConsent
              phone
              presentationSummary
              presentationTitle
              privacyConsent
              title
              updatedAt
            }
            nextToken
          }
          Sponsors {
            items {
              aPSId
              companyId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          codes {
            code
          }
          createdAt
          id
          updatedAt
          year
        }
        aPSId
        createdAt
        id
        updatedAt
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        userId
      }
      nextToken
    }
  }
`;
export const aPSUsersByUserId = /* GraphQL */ `
  query APSUsersByUserId(
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $userId: ID!
  ) {
    aPSUsersByUserId(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      userId: $userId
    ) {
      items {
        aPS {
          Registrants {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          Speakers {
            items {
              aPSSpeakersId
              bio
              company
              createdAt
              email
              firstName
              headshot
              id
              lastName
              linkedin
              mediaConsent
              phone
              presentationSummary
              presentationTitle
              privacyConsent
              title
              updatedAt
            }
            nextToken
          }
          Sponsors {
            items {
              aPSId
              companyId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          codes {
            code
          }
          createdAt
          id
          updatedAt
          year
        }
        aPSId
        createdAt
        id
        updatedAt
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        userId
      }
      nextToken
    }
  }
`;
export const addOnRegistrantsByEmail = /* GraphQL */ `
  query AddOnRegistrantsByEmail(
    $email: String!
    $filter: ModelAddOnRegistrantFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    addOnRegistrantsByEmail(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        company
        createdAt
        email
        fullName
        id
        tour
        updatedAt
      }
      nextToken
    }
  }
`;
export const appStartsByEmail = /* GraphQL */ `
  query AppStartsByEmail(
    $email: String!
    $filter: ModelAppStartFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    appStartsByEmail(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdOn
        email
        firstName
        id
        lastName
        phone
        source
        sourceUrl
        updatedOn
      }
      nextToken
    }
  }
`;
export const applicationStartsByEmail = /* GraphQL */ `
  query ApplicationStartsByEmail(
    $email: String!
    $filter: ModelApplicationStartFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    applicationStartsByEmail(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        email
        firstName
        id
        lastName
        phone
        source
        sourceUrl
        updatedAt
      }
      nextToken
    }
  }
`;
export const articleRelatedCoursesByArticleId = /* GraphQL */ `
  query ArticleRelatedCoursesByArticleId(
    $articleId: ID!
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    articleRelatedCoursesByArticleId(
      articleId: $articleId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        article {
          content
          createdAt
          id
          media
          relatedCourses {
            items {
              articleId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          seoImage
          slug
          subhead
          tags
          title
          updatedAt
        }
        articleId
        course {
          articles {
            items {
              articleId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          category
          certificate {
            items {
              certificateId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          createdAt
          hour
          id
          lessons
          media
          price
          slug
          subhead
          title
          updatedAt
          video
          videos
        }
        courseId
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const articleRelatedCoursesByCourseId = /* GraphQL */ `
  query ArticleRelatedCoursesByCourseId(
    $courseId: ID!
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    articleRelatedCoursesByCourseId(
      courseId: $courseId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        article {
          content
          createdAt
          id
          media
          relatedCourses {
            items {
              articleId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          seoImage
          slug
          subhead
          tags
          title
          updatedAt
        }
        articleId
        course {
          articles {
            items {
              articleId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          category
          certificate {
            items {
              certificateId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          createdAt
          hour
          id
          lessons
          media
          price
          slug
          subhead
          title
          updatedAt
          video
          videos
        }
        courseId
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const articlesBySlug = /* GraphQL */ `
  query ArticlesBySlug(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    articlesBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        content
        createdAt
        id
        media
        relatedCourses {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        seoImage
        slug
        subhead
        tags
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const authorTemplatesByAuthorId = /* GraphQL */ `
  query AuthorTemplatesByAuthorId(
    $authorId: ID!
    $filter: ModelAuthorTemplatesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    authorTemplatesByAuthorId(
      authorId: $authorId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        author {
          company
          createdAt
          headshot
          id
          linkedIn
          name
          templates {
            items {
              authorId
              createdAt
              id
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          title
          updatedAt
        }
        authorId
        createdAt
        id
        indexTemplate {
          authors {
            items {
              authorId
              createdAt
              id
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          rows {
            items {
              createdAt
              id
              indexRowId
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          slug
          subhead
          title
          updatedAt
        }
        indexTemplateId
        updatedAt
      }
      nextToken
    }
  }
`;
export const authorTemplatesByIndexTemplateId = /* GraphQL */ `
  query AuthorTemplatesByIndexTemplateId(
    $filter: ModelAuthorTemplatesFilterInput
    $indexTemplateId: ID!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    authorTemplatesByIndexTemplateId(
      filter: $filter
      indexTemplateId: $indexTemplateId
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        author {
          company
          createdAt
          headshot
          id
          linkedIn
          name
          templates {
            items {
              authorId
              createdAt
              id
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          title
          updatedAt
        }
        authorId
        createdAt
        id
        indexTemplate {
          authors {
            items {
              authorId
              createdAt
              id
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          rows {
            items {
              createdAt
              id
              indexRowId
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          slug
          subhead
          title
          updatedAt
        }
        indexTemplateId
        updatedAt
      }
      nextToken
    }
  }
`;
export const blogsBySlug = /* GraphQL */ `
  query BlogsBySlug(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    blogsBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        author
        content
        createdAt
        date
        id
        media
        slug
        tags
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const cMPMSessionsByDeadline = /* GraphQL */ `
  query CMPMSessionsByDeadline(
    $deadline: String!
    $filter: ModelCMPMSessionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    cMPMSessionsByDeadline(
      deadline: $deadline
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        deadline
        endDate
        id
        startDate
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const cMPMSessionsByEndDate = /* GraphQL */ `
  query CMPMSessionsByEndDate(
    $endDate: String!
    $filter: ModelCMPMSessionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    cMPMSessionsByEndDate(
      endDate: $endDate
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        deadline
        endDate
        id
        startDate
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const careersBySlug = /* GraphQL */ `
  query CareersBySlug(
    $filter: ModelCareerFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    careersBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        altName
        apcCopy
        beverageCopy
        cmpmCopy
        coreCopy
        cpsCopy
        createdAt
        dayInLife {
          items {
            careerDayInLifeId
            createdAt
            desc
            icon
            id
            name
            updatedAt
          }
          nextToken
        }
        electiveCopy
        freeCopy
        id
        media
        slug
        subhead
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const certAppStartsByEmail = /* GraphQL */ `
  query CertAppStartsByEmail(
    $email: String!
    $filter: ModelCertAppStartFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    certAppStartsByEmail(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        country
        createdAt
        email
        firstName
        id
        ipAddress
        lastName
        phone
        source
        sourceUrl
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const certAppStartsByTypeAndCreatedAt = /* GraphQL */ `
  query CertAppStartsByTypeAndCreatedAt(
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelCertAppStartFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $type: String!
  ) {
    certAppStartsByTypeAndCreatedAt(
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      type: $type
    ) {
      items {
        country
        createdAt
        email
        firstName
        id
        ipAddress
        lastName
        phone
        source
        sourceUrl
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const certificateCoursesByCertificateId = /* GraphQL */ `
  query CertificateCoursesByCertificateId(
    $certificateId: ID!
    $filter: ModelCertificateCoursesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    certificateCoursesByCertificateId(
      certificateId: $certificateId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        certificate {
          brochure_link
          ceus_total
          courses {
            items {
              certificateId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          courses_total
          createdAt
          demoLink
          hours_total
          id
          lmsLink
          price_features
          price_full
          price_monthly
          slug
          title
          title_button_1_link
          title_button_1_text
          title_button_2_link
          title_button_2_text
          title_callout_1
          title_callout_2
          title_image
          title_text
          updatedAt
          video
          whoText
        }
        certificateId
        course {
          articles {
            items {
              articleId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          category
          certificate {
            items {
              certificateId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          createdAt
          hour
          id
          lessons
          media
          price
          slug
          subhead
          title
          updatedAt
          video
          videos
        }
        courseId
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const certificateCoursesByCourseId = /* GraphQL */ `
  query CertificateCoursesByCourseId(
    $courseId: ID!
    $filter: ModelCertificateCoursesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    certificateCoursesByCourseId(
      courseId: $courseId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        certificate {
          brochure_link
          ceus_total
          courses {
            items {
              certificateId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          courses_total
          createdAt
          demoLink
          hours_total
          id
          lmsLink
          price_features
          price_full
          price_monthly
          slug
          title
          title_button_1_link
          title_button_1_text
          title_button_2_link
          title_button_2_text
          title_callout_1
          title_callout_2
          title_image
          title_text
          updatedAt
          video
          whoText
        }
        certificateId
        course {
          articles {
            items {
              articleId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          category
          certificate {
            items {
              certificateId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          createdAt
          hour
          id
          lessons
          media
          price
          slug
          subhead
          title
          updatedAt
          video
          videos
        }
        courseId
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const certificatesBySlug = /* GraphQL */ `
  query CertificatesBySlug(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    certificatesBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        brochure_link
        ceus_total
        courses {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        courses_total
        createdAt
        demoLink
        hours_total
        id
        lmsLink
        price_features
        price_full
        price_monthly
        slug
        title
        title_button_1_link
        title_button_1_text
        title_button_2_link
        title_button_2_text
        title_callout_1
        title_callout_2
        title_image
        title_text
        updatedAt
        video
        whoText
      }
      nextToken
    }
  }
`;
export const cirriculumCoursesByLMSCirriculumId = /* GraphQL */ `
  query CirriculumCoursesByLMSCirriculumId(
    $filter: ModelCirriculumCoursesFilterInput
    $lMSCirriculumId: ID!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    cirriculumCoursesByLMSCirriculumId(
      filter: $filter
      lMSCirriculumId: $lMSCirriculumId
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        lMSCirriculum {
          Courses {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          description
          id
          shorthand
          slug
          title
          updatedAt
        }
        lMSCirriculumId
        lMSCourse {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        lMSCourseId
        updatedAt
      }
      nextToken
    }
  }
`;
export const cirriculumCoursesByLMSCourseId = /* GraphQL */ `
  query CirriculumCoursesByLMSCourseId(
    $filter: ModelCirriculumCoursesFilterInput
    $lMSCourseId: ID!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    cirriculumCoursesByLMSCourseId(
      filter: $filter
      lMSCourseId: $lMSCourseId
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        lMSCirriculum {
          Courses {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          description
          id
          shorthand
          slug
          title
          updatedAt
        }
        lMSCirriculumId
        lMSCourse {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        lMSCourseId
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseClicksByCourseID = /* GraphQL */ `
  query CourseClicksByCourseID(
    $courseID: String!
    $filter: ModelCourseClickFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    courseClicksByCourseID(
      courseID: $courseID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        country
        courseID
        createdAt
        format
        id
        ipAddress
        lat
        long
        nextPath
        page
        referrer
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseInstructorsByInstructorId = /* GraphQL */ `
  query CourseInstructorsByInstructorId(
    $filter: ModelCourseInstructorsFilterInput
    $instructorId: ID!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    courseInstructorsByInstructorId(
      filter: $filter
      instructorId: $instructorId
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        instructor {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        instructorId
        lMSCourse {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        lMSCourseId
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseInstructorsByLMSCourseId = /* GraphQL */ `
  query CourseInstructorsByLMSCourseId(
    $filter: ModelCourseInstructorsFilterInput
    $lMSCourseId: ID!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    courseInstructorsByLMSCourseId(
      filter: $filter
      lMSCourseId: $lMSCourseId
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        instructor {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        instructorId
        lMSCourse {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        lMSCourseId
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseLessonsByLMSCourseId = /* GraphQL */ `
  query CourseLessonsByLMSCourseId(
    $filter: ModelCourseLessonsFilterInput
    $lMSCourseId: ID!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    courseLessonsByLMSCourseId(
      filter: $filter
      lMSCourseId: $lMSCourseId
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        lMSCourse {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        lMSCourseId
        lMSLesson {
          content
          course {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          media
          modules {
            items {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            nextToken
          }
          objectives
          percentComplete
          slug
          subheadline
          title
          updatedAt
        }
        lMSLessonId
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseLessonsByLMSLessonId = /* GraphQL */ `
  query CourseLessonsByLMSLessonId(
    $filter: ModelCourseLessonsFilterInput
    $lMSLessonId: ID!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    courseLessonsByLMSLessonId(
      filter: $filter
      lMSLessonId: $lMSLessonId
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        lMSCourse {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        lMSCourseId
        lMSLesson {
          content
          course {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          media
          modules {
            items {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            nextToken
          }
          objectives
          percentComplete
          slug
          subheadline
          title
          updatedAt
        }
        lMSLessonId
        updatedAt
      }
      nextToken
    }
  }
`;
export const courseSearchesByTerm = /* GraphQL */ `
  query CourseSearchesByTerm(
    $filter: ModelCourseSearchFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $term: String!
  ) {
    courseSearchesByTerm(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      term: $term
    ) {
      items {
        country
        createdAt
        id
        ipAddress
        term
        updatedAt
      }
      nextToken
    }
  }
`;
export const coursesBySlug = /* GraphQL */ `
  query CoursesBySlug(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    coursesBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        articles {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        category
        certificate {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        hour
        id
        lessons
        media
        price
        slug
        subhead
        title
        updatedAt
        video
        videos
      }
      nextToken
    }
  }
`;
export const customerLibariesBySlug = /* GraphQL */ `
  query CustomerLibariesBySlug(
    $filter: ModelCustomerLibaryFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    customerLibariesBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        addOns
        clientCourses
        createdAt
        description
        displayName
        email
        highlightColor
        id
        link
        logo
        pdf
        primaryColor
        pschoolCourses
        slide
        slug
        status
        updatedAt
        video
      }
      nextToken
    }
  }
`;
export const getAPS = /* GraphQL */ `
  query GetAPS($id: ID!) {
    getAPS(id: $id) {
      Registrants {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          createdAt
          id
          updatedAt
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          userId
        }
        nextToken
      }
      Speakers {
        items {
          aPSSpeakersId
          apsHistory {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          bio
          company
          createdAt
          email
          firstName
          headshot
          id
          lastName
          linkedin
          mediaConsent
          phone
          presentationSummary
          presentationTitle
          privacyConsent
          title
          updatedAt
        }
        nextToken
      }
      Sponsors {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          company {
            Employees {
              nextToken
            }
            apsID {
              nextToken
            }
            city
            createdAt
            email
            id
            name
            phone
            state
            street_1
            street_2
            updatedAt
            website
            zip
          }
          companyId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      codes {
        code
      }
      createdAt
      id
      updatedAt
      year
    }
  }
`;
export const getAPSRegistrant = /* GraphQL */ `
  query GetAPSRegistrant($id: ID!) {
    getAPSRegistrant(id: $id) {
      code
      codeRequested
      codeSent
      company
      createdAt
      email
      id
      innovationWorkshop
      name
      phone
      plantTour
      registrationReceived
      speedNetworking
      title
      updatedAt
      welcomeEmailSent
      worksWith
      year
    }
  }
`;
export const getAPSSpeaker = /* GraphQL */ `
  query GetAPSSpeaker($id: ID!) {
    getAPSSpeaker(id: $id) {
      aPSSpeakersId
      apsHistory {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      bio
      company
      createdAt
      email
      firstName
      headshot
      id
      lastName
      linkedin
      mediaConsent
      phone
      presentationSummary
      presentationTitle
      privacyConsent
      title
      updatedAt
    }
  }
`;
export const getAPSSpeaker2024 = /* GraphQL */ `
  query GetAPSSpeaker2024($id: ID!) {
    getAPSSpeaker2024(id: $id) {
      bio
      company
      createdAt
      email
      firstName
      headshot
      id
      lastName
      linkedin
      mediaConsent
      phone
      presentationSummary
      presentationTitle
      privacyConsent
      title
      updatedAt
    }
  }
`;
export const getAPSSponsor = /* GraphQL */ `
  query GetAPSSponsor($id: ID!) {
    getAPSSponsor(id: $id) {
      aPS {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      aPSId
      company {
        Employees {
          items {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
        }
        apsID {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        city
        createdAt
        email
        id
        name
        phone
        state
        street_1
        street_2
        updatedAt
        website
        zip
      }
      companyId
      createdAt
      id
      updatedAt
    }
  }
`;
export const getAPSTicket = /* GraphQL */ `
  query GetAPSTicket($id: ID!) {
    getAPSTicket(id: $id) {
      company
      createdAt
      email
      id
      name
      paymentConfirmation
      phone
      title
      updatedAt
    }
  }
`;
export const getAPSTicketRegistrant = /* GraphQL */ `
  query GetAPSTicketRegistrant($id: ID!) {
    getAPSTicketRegistrant(id: $id) {
      code
      company
      createdAt
      email
      id
      innovationWorkshop
      name
      phone
      plantTour
      registrationReceived
      speedNetworking
      title
      updatedAt
      welcomeEmailSent
      worksWith
      year
    }
  }
`;
export const getAPSUser = /* GraphQL */ `
  query GetAPSUser($id: ID!) {
    getAPSUser(id: $id) {
      aPS {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      aPSId
      createdAt
      id
      updatedAt
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      userId
    }
  }
`;
export const getAddOnRegistrant = /* GraphQL */ `
  query GetAddOnRegistrant($id: ID!) {
    getAddOnRegistrant(id: $id) {
      company
      createdAt
      email
      fullName
      id
      tour
      updatedAt
    }
  }
`;
export const getAppStart = /* GraphQL */ `
  query GetAppStart($id: ID!) {
    getAppStart(id: $id) {
      createdOn
      email
      firstName
      id
      lastName
      phone
      source
      sourceUrl
      updatedOn
    }
  }
`;
export const getApplicationStart = /* GraphQL */ `
  query GetApplicationStart($createdAt: String!, $id: ID!) {
    getApplicationStart(createdAt: $createdAt, id: $id) {
      createdAt
      email
      firstName
      id
      lastName
      phone
      source
      sourceUrl
      updatedAt
    }
  }
`;
export const getAristosForm = /* GraphQL */ `
  query GetAristosForm($id: ID!) {
    getAristosForm(id: $id) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const getArticle = /* GraphQL */ `
  query GetArticle($id: ID!) {
    getArticle(id: $id) {
      content
      createdAt
      id
      media
      relatedCourses {
        items {
          article {
            content
            createdAt
            id
            media
            relatedCourses {
              nextToken
            }
            seoImage
            slug
            subhead
            tags
            title
            updatedAt
          }
          articleId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      seoImage
      slug
      subhead
      tags
      title
      updatedAt
    }
  }
`;
export const getArticleRelatedCourses = /* GraphQL */ `
  query GetArticleRelatedCourses($id: ID!) {
    getArticleRelatedCourses(id: $id) {
      article {
        content
        createdAt
        id
        media
        relatedCourses {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        seoImage
        slug
        subhead
        tags
        title
        updatedAt
      }
      articleId
      course {
        articles {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        category
        certificate {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        hour
        id
        lessons
        media
        price
        slug
        subhead
        title
        updatedAt
        video
        videos
      }
      courseId
      createdAt
      id
      updatedAt
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      company
      createdAt
      headshot
      id
      linkedIn
      name
      templates {
        items {
          author {
            company
            createdAt
            headshot
            id
            linkedIn
            name
            templates {
              nextToken
            }
            title
            updatedAt
          }
          authorId
          createdAt
          id
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      title
      updatedAt
    }
  }
`;
export const getAuthorTemplates = /* GraphQL */ `
  query GetAuthorTemplates($id: ID!) {
    getAuthorTemplates(id: $id) {
      author {
        company
        createdAt
        headshot
        id
        linkedIn
        name
        templates {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        title
        updatedAt
      }
      authorId
      createdAt
      id
      indexTemplate {
        authors {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        rows {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        slug
        subhead
        title
        updatedAt
      }
      indexTemplateId
      updatedAt
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      author
      content
      createdAt
      date
      id
      media
      slug
      tags
      title
      updatedAt
    }
  }
`;
export const getBoschForm = /* GraphQL */ `
  query GetBoschForm($id: ID!) {
    getBoschForm(id: $id) {
      approved
      company
      createdAt
      email
      id
      name
      title
      topicFour
      topicOne
      topicThree
      topicTwo
      updatedAt
    }
  }
`;
export const getCMPMForm = /* GraphQL */ `
  query GetCMPMForm($id: ID!) {
    getCMPMForm(id: $id) {
      addressExtra
      areaOfInterest
      background
      birthYear
      cMPMFormUserId
      city
      cmpmGoals
      companyName
      companyTitle
      country
      createdOn
      email
      firstName
      id
      lastName
      linkedin
      moreAboutYou
      optOut
      payment
      paymentConfirmation
      phone
      referral
      sessionApplying
      state
      status
      streetAddress
      updatedOn
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      whyPackaging
      yearGoals
    }
  }
`;
export const getCMPMSession = /* GraphQL */ `
  query GetCMPMSession($id: ID!) {
    getCMPMSession(id: $id) {
      createdAt
      deadline
      endDate
      id
      startDate
      title
      updatedAt
    }
  }
`;
export const getCPSForm = /* GraphQL */ `
  query GetCPSForm($id: ID!) {
    getCPSForm(id: $id) {
      addressExtra
      areaOfInterest
      background
      birthYear
      cPSFormUserId
      city
      companyName
      companyTitle
      country
      cpsGoals
      createdOn
      elective
      email
      firstName
      id
      lastName
      linkedin
      moreAboutYou
      optOut
      payment
      paymentConfirmation
      phone
      referral
      sessionApplying
      state
      status
      streetAddress
      updatedOn
      user {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      whyPackaging
      yearGoals
    }
  }
`;
export const getCareer = /* GraphQL */ `
  query GetCareer($id: ID!) {
    getCareer(id: $id) {
      altName
      apcCopy
      beverageCopy
      cmpmCopy
      coreCopy
      cpsCopy
      createdAt
      dayInLife {
        items {
          careerDayInLifeId
          createdAt
          desc
          icon
          id
          name
          updatedAt
        }
        nextToken
      }
      electiveCopy
      freeCopy
      id
      media
      slug
      subhead
      title
      updatedAt
    }
  }
`;
export const getCertAppStart = /* GraphQL */ `
  query GetCertAppStart($id: ID!) {
    getCertAppStart(id: $id) {
      country
      createdAt
      email
      firstName
      id
      ipAddress
      lastName
      phone
      source
      sourceUrl
      type
      updatedAt
    }
  }
`;
export const getCertificate = /* GraphQL */ `
  query GetCertificate($id: ID!) {
    getCertificate(id: $id) {
      brochure_link
      ceus_total
      courses {
        items {
          certificate {
            brochure_link
            ceus_total
            courses {
              nextToken
            }
            courses_total
            createdAt
            demoLink
            hours_total
            id
            lmsLink
            price_features
            price_full
            price_monthly
            slug
            title
            title_button_1_link
            title_button_1_text
            title_button_2_link
            title_button_2_text
            title_callout_1
            title_callout_2
            title_image
            title_text
            updatedAt
            video
            whoText
          }
          certificateId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      courses_total
      createdAt
      demoLink
      hours_total
      id
      lmsLink
      price_features
      price_full
      price_monthly
      slug
      title
      title_button_1_link
      title_button_1_text
      title_button_2_link
      title_button_2_text
      title_callout_1
      title_callout_2
      title_image
      title_text
      updatedAt
      video
      whoText
    }
  }
`;
export const getCertificateCourses = /* GraphQL */ `
  query GetCertificateCourses($id: ID!) {
    getCertificateCourses(id: $id) {
      certificate {
        brochure_link
        ceus_total
        courses {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        courses_total
        createdAt
        demoLink
        hours_total
        id
        lmsLink
        price_features
        price_full
        price_monthly
        slug
        title
        title_button_1_link
        title_button_1_text
        title_button_2_link
        title_button_2_text
        title_callout_1
        title_callout_2
        title_image
        title_text
        updatedAt
        video
        whoText
      }
      certificateId
      course {
        articles {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        category
        certificate {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        hour
        id
        lessons
        media
        price
        slug
        subhead
        title
        updatedAt
        video
        videos
      }
      courseId
      createdAt
      id
      updatedAt
    }
  }
`;
export const getCirriculumCourses = /* GraphQL */ `
  query GetCirriculumCourses($id: ID!) {
    getCirriculumCourses(id: $id) {
      createdAt
      id
      lMSCirriculum {
        Courses {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        description
        id
        shorthand
        slug
        title
        updatedAt
      }
      lMSCirriculumId
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      updatedAt
    }
  }
`;
export const getClick = /* GraphQL */ `
  query GetClick($id: ID!) {
    getClick(id: $id) {
      createdAt
      id
      identifier
      ipAddress
      location
      nextPath
      path
      ref
      type
      updatedAt
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      Employees {
        items {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        nextToken
      }
      apsID {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          company {
            Employees {
              nextToken
            }
            apsID {
              nextToken
            }
            city
            createdAt
            email
            id
            name
            phone
            state
            street_1
            street_2
            updatedAt
            website
            zip
          }
          companyId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      city
      createdAt
      email
      id
      name
      phone
      state
      street_1
      street_2
      updatedAt
      website
      zip
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      articles {
        items {
          article {
            content
            createdAt
            id
            media
            relatedCourses {
              nextToken
            }
            seoImage
            slug
            subhead
            tags
            title
            updatedAt
          }
          articleId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      category
      certificate {
        items {
          certificate {
            brochure_link
            ceus_total
            courses {
              nextToken
            }
            courses_total
            createdAt
            demoLink
            hours_total
            id
            lmsLink
            price_features
            price_full
            price_monthly
            slug
            title
            title_button_1_link
            title_button_1_text
            title_button_2_link
            title_button_2_text
            title_callout_1
            title_callout_2
            title_image
            title_text
            updatedAt
            video
            whoText
          }
          certificateId
          course {
            articles {
              nextToken
            }
            category
            certificate {
              nextToken
            }
            createdAt
            hour
            id
            lessons
            media
            price
            slug
            subhead
            title
            updatedAt
            video
            videos
          }
          courseId
          createdAt
          id
          updatedAt
        }
        nextToken
      }
      createdAt
      hour
      id
      lessons
      media
      price
      slug
      subhead
      title
      updatedAt
      video
      videos
    }
  }
`;
export const getCourseClick = /* GraphQL */ `
  query GetCourseClick($id: ID!) {
    getCourseClick(id: $id) {
      country
      courseID
      createdAt
      format
      id
      ipAddress
      lat
      long
      nextPath
      page
      referrer
      updatedAt
    }
  }
`;
export const getCourseInstructors = /* GraphQL */ `
  query GetCourseInstructors($id: ID!) {
    getCourseInstructors(id: $id) {
      createdAt
      id
      instructor {
        coursesTaught {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        instructor {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        updatedAt
        userId
      }
      instructorId
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      updatedAt
    }
  }
`;
export const getCourseLessons = /* GraphQL */ `
  query GetCourseLessons($id: ID!) {
    getCourseLessons(id: $id) {
      createdAt
      id
      lMSCourse {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      lMSCourseId
      lMSLesson {
        content
        course {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        media
        modules {
          items {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          nextToken
        }
        objectives
        percentComplete
        slug
        subheadline
        title
        updatedAt
      }
      lMSLessonId
      updatedAt
    }
  }
`;
export const getCourseSearch = /* GraphQL */ `
  query GetCourseSearch($id: ID!) {
    getCourseSearch(id: $id) {
      country
      createdAt
      id
      ipAddress
      term
      updatedAt
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      courses {
        items {
          clicks
          courseId
          createdAt
          customer {
            courses {
              nextToken
            }
            createdAt
            displayName
            email
            highlightColor
            id
            link
            logo
            offered
            offerings
            pdf
            primaryColor
            pscourses {
              nextToken
            }
            slide
            status
            updatedAt
            video
          }
          customerId
          id
          updatedAt
        }
        nextToken
      }
      createdAt
      displayName
      email
      highlightColor
      id
      link
      logo
      offered
      offerings
      pdf
      primaryColor
      pscourses {
        items {
          courseId
          createdAt
          customer {
            courses {
              nextToken
            }
            createdAt
            displayName
            email
            highlightColor
            id
            link
            logo
            offered
            offerings
            pdf
            primaryColor
            pscourses {
              nextToken
            }
            slide
            status
            updatedAt
            video
          }
          customerId
          id
          updatedAt
        }
        nextToken
      }
      slide
      status
      updatedAt
      video
    }
  }
`;
export const getCustomerLibary = /* GraphQL */ `
  query GetCustomerLibary($id: ID!) {
    getCustomerLibary(id: $id) {
      addOns
      clientCourses
      createdAt
      description
      displayName
      email
      highlightColor
      id
      link
      logo
      pdf
      primaryColor
      pschoolCourses
      slide
      slug
      status
      updatedAt
      video
    }
  }
`;
export const getDayInLifeItem = /* GraphQL */ `
  query GetDayInLifeItem($id: ID!) {
    getDayInLifeItem(id: $id) {
      careerDayInLifeId
      createdAt
      desc
      icon
      id
      name
      updatedAt
    }
  }
`;
export const getGuardianForm = /* GraphQL */ `
  query GetGuardianForm($id: ID!) {
    getGuardianForm(id: $id) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const getIncludedCourse = /* GraphQL */ `
  query GetIncludedCourse($id: ID!) {
    getIncludedCourse(id: $id) {
      courseId
      createdAt
      customer {
        courses {
          items {
            clicks
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        displayName
        email
        highlightColor
        id
        link
        logo
        offered
        offerings
        pdf
        primaryColor
        pscourses {
          items {
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        slide
        status
        updatedAt
        video
      }
      customerId
      id
      updatedAt
    }
  }
`;
export const getIndexRow = /* GraphQL */ `
  query GetIndexRow($id: ID!) {
    getIndexRow(id: $id) {
      content
      createdAt
      headline
      id
      subhead
      templates {
        items {
          createdAt
          id
          indexRow {
            content
            createdAt
            headline
            id
            subhead
            templates {
              nextToken
            }
            type
            updatedAt
          }
          indexRowId
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      type
      updatedAt
    }
  }
`;
export const getIndexTemplate = /* GraphQL */ `
  query GetIndexTemplate($id: ID!) {
    getIndexTemplate(id: $id) {
      authors {
        items {
          author {
            company
            createdAt
            headshot
            id
            linkedIn
            name
            templates {
              nextToken
            }
            title
            updatedAt
          }
          authorId
          createdAt
          id
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      rows {
        items {
          createdAt
          id
          indexRow {
            content
            createdAt
            headline
            id
            subhead
            templates {
              nextToken
            }
            type
            updatedAt
          }
          indexRowId
          indexTemplate {
            authors {
              nextToken
            }
            createdAt
            id
            rows {
              nextToken
            }
            slug
            subhead
            title
            updatedAt
          }
          indexTemplateId
          updatedAt
        }
        nextToken
      }
      slug
      subhead
      title
      updatedAt
    }
  }
`;
export const getIndexTemplateRows = /* GraphQL */ `
  query GetIndexTemplateRows($id: ID!) {
    getIndexTemplateRows(id: $id) {
      createdAt
      id
      indexRow {
        content
        createdAt
        headline
        id
        subhead
        templates {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        type
        updatedAt
      }
      indexRowId
      indexTemplate {
        authors {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        rows {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        slug
        subhead
        title
        updatedAt
      }
      indexTemplateId
      updatedAt
    }
  }
`;
export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
      coursesTaught {
        items {
          createdAt
          id
          instructor {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          instructorId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      instructor {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      updatedAt
      userId
    }
  }
`;
export const getLMSCirriculum = /* GraphQL */ `
  query GetLMSCirriculum($id: ID!) {
    getLMSCirriculum(id: $id) {
      Courses {
        items {
          createdAt
          id
          lMSCirriculum {
            Courses {
              nextToken
            }
            createdAt
            description
            id
            shorthand
            slug
            title
            updatedAt
          }
          lMSCirriculumId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      createdAt
      description
      id
      shorthand
      slug
      title
      updatedAt
    }
  }
`;
export const getLMSCollection = /* GraphQL */ `
  query GetLMSCollection($id: ID!) {
    getLMSCollection(id: $id) {
      category
      collectionId
      courses
      createdAt
      description
      hours
      id
      instructor
      instructorDescription
      instructorImage
      instructorLink
      lmsLink
      price
      slug
      subtitle
      title
      updatedAt
    }
  }
`;
export const getLMSCourse = /* GraphQL */ `
  query GetLMSCourse($id: ID!) {
    getLMSCourse(id: $id) {
      altLink
      category
      categoryArray
      cirriculum {
        items {
          createdAt
          id
          lMSCirriculum {
            Courses {
              nextToken
            }
            createdAt
            description
            id
            shorthand
            slug
            title
            updatedAt
          }
          lMSCirriculumId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      collection
      courseId
      createdAt
      demo
      hours
      id
      infoSheet
      instructors {
        items {
          createdAt
          id
          instructor {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          instructorId
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          updatedAt
        }
        nextToken
      }
      lessons
      link
      lmsLessons {
        items {
          createdAt
          id
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          lMSLesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          lMSLessonId
          updatedAt
        }
        nextToken
      }
      objectives
      partOf
      percentComplete
      preview
      price
      seoImage
      shortDescription
      slug
      studentCourseEnrolledId
      subheadline
      title
      trial_link
      type
      updatedAt
      videos
      what_learned
    }
  }
`;
export const getLMSLesson = /* GraphQL */ `
  query GetLMSLesson($id: ID!) {
    getLMSLesson(id: $id) {
      content
      course {
        items {
          createdAt
          id
          lMSCourse {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          lMSCourseId
          lMSLesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          lMSLessonId
          updatedAt
        }
        nextToken
      }
      createdAt
      id
      media
      modules {
        items {
          content
          createdAt
          id
          lMSLessonModulesId
          lMSModuleQuizId
          lesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          media
          mediaType
          objectives
          quiz {
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            id
            lMSQuizModuleId
            module {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            prompt
            updatedAt
          }
          slides {
            items {
              createdAt
              description
              id
              lMSModuleSlidesId
              slideSource
              updatedAt
            }
            nextToken
          }
          slug
          subheadline
          title
          updatedAt
        }
        nextToken
      }
      objectives
      percentComplete
      slug
      subheadline
      title
      updatedAt
    }
  }
`;
export const getLMSModule = /* GraphQL */ `
  query GetLMSModule($id: ID!) {
    getLMSModule(id: $id) {
      content
      createdAt
      id
      lMSLessonModulesId
      lMSModuleQuizId
      lesson {
        content
        course {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        media
        modules {
          items {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          nextToken
        }
        objectives
        percentComplete
        slug
        subheadline
        title
        updatedAt
      }
      media
      mediaType
      objectives
      quiz {
        answer1
        answer2
        answer3
        answer4
        correctAnswer
        createdAt
        id
        lMSQuizModuleId
        module {
          content
          createdAt
          id
          lMSLessonModulesId
          lMSModuleQuizId
          lesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          media
          mediaType
          objectives
          quiz {
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            id
            lMSQuizModuleId
            module {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            prompt
            updatedAt
          }
          slides {
            items {
              createdAt
              description
              id
              lMSModuleSlidesId
              slideSource
              updatedAt
            }
            nextToken
          }
          slug
          subheadline
          title
          updatedAt
        }
        prompt
        updatedAt
      }
      slides {
        items {
          createdAt
          description
          id
          lMSModuleSlidesId
          slideSource
          updatedAt
        }
        nextToken
      }
      slug
      subheadline
      title
      updatedAt
    }
  }
`;
export const getLMSQuiz = /* GraphQL */ `
  query GetLMSQuiz($id: ID!) {
    getLMSQuiz(id: $id) {
      answer1
      answer2
      answer3
      answer4
      correctAnswer
      createdAt
      id
      lMSQuizModuleId
      module {
        content
        createdAt
        id
        lMSLessonModulesId
        lMSModuleQuizId
        lesson {
          content
          course {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          media
          modules {
            items {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            nextToken
          }
          objectives
          percentComplete
          slug
          subheadline
          title
          updatedAt
        }
        media
        mediaType
        objectives
        quiz {
          answer1
          answer2
          answer3
          answer4
          correctAnswer
          createdAt
          id
          lMSQuizModuleId
          module {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          prompt
          updatedAt
        }
        slides {
          items {
            createdAt
            description
            id
            lMSModuleSlidesId
            slideSource
            updatedAt
          }
          nextToken
        }
        slug
        subheadline
        title
        updatedAt
      }
      prompt
      updatedAt
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      actionCTA
      actionExample
      actionLink
      actionLinkTitle
      actionSubhead
      author
      backdate
      content
      createdAt
      createdBy
      featured
      id
      lastEditedBy
      links {
        items {
          createdAt
          id
          lessonLinksId
          link
          name
          updatedAt
        }
        nextToken
      }
      media
      mediaType
      objectives
      related
      screengrab
      seoImage
      slides
      slug
      sources {
        items {
          createdAt
          id
          lessonSourcesId
          link
          name
          position
          updatedAt
        }
        nextToken
      }
      status
      subhead
      tags {
        items {
          createdAt
          id
          lesson {
            actionCTA
            actionExample
            actionLink
            actionLinkTitle
            actionSubhead
            author
            backdate
            content
            createdAt
            createdBy
            featured
            id
            lastEditedBy
            links {
              nextToken
            }
            media
            mediaType
            objectives
            related
            screengrab
            seoImage
            slides
            slug
            sources {
              nextToken
            }
            status
            subhead
            tags {
              nextToken
            }
            title
            type
            updatedAt
            videoLink
          }
          lessonId
          tags {
            createdAt
            id
            lesson {
              nextToken
            }
            tag
            updatedAt
          }
          tagsId
          updatedAt
        }
        nextToken
      }
      title
      type
      updatedAt
      videoLink
    }
  }
`;
export const getLessonClick = /* GraphQL */ `
  query GetLessonClick($id: ID!) {
    getLessonClick(id: $id) {
      LessonID
      country
      createdAt
      format
      id
      ipAddress
      lat
      long
      page
      referrer
      updatedAt
    }
  }
`;
export const getLessonLink = /* GraphQL */ `
  query GetLessonLink($id: ID!) {
    getLessonLink(id: $id) {
      createdAt
      id
      lessonLinksId
      link
      name
      updatedAt
    }
  }
`;
export const getLessonSource = /* GraphQL */ `
  query GetLessonSource($id: ID!) {
    getLessonSource(id: $id) {
      createdAt
      id
      lessonSourcesId
      link
      name
      position
      updatedAt
    }
  }
`;
export const getLessonTags = /* GraphQL */ `
  query GetLessonTags($id: ID!) {
    getLessonTags(id: $id) {
      createdAt
      id
      lesson {
        actionCTA
        actionExample
        actionLink
        actionLinkTitle
        actionSubhead
        author
        backdate
        content
        createdAt
        createdBy
        featured
        id
        lastEditedBy
        links {
          items {
            createdAt
            id
            lessonLinksId
            link
            name
            updatedAt
          }
          nextToken
        }
        media
        mediaType
        objectives
        related
        screengrab
        seoImage
        slides
        slug
        sources {
          items {
            createdAt
            id
            lessonSourcesId
            link
            name
            position
            updatedAt
          }
          nextToken
        }
        status
        subhead
        tags {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        title
        type
        updatedAt
        videoLink
      }
      lessonId
      tags {
        createdAt
        id
        lesson {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        tag
        updatedAt
      }
      tagsId
      updatedAt
    }
  }
`;
export const getMorrisetteForm = /* GraphQL */ `
  query GetMorrisetteForm($id: ID!) {
    getMorrisetteForm(id: $id) {
      approved
      company
      createdAt
      email
      id
      name
      preference
      title
      updatedAt
    }
  }
`;
export const getObjective = /* GraphQL */ `
  query GetObjective($id: ID!) {
    getObjective(id: $id) {
      completed
      createdAt
      id
      objective
      updatedAt
    }
  }
`;
export const getSalesBar = /* GraphQL */ `
  query GetSalesBar($id: ID!) {
    getSalesBar(id: $id) {
      createdAt
      icon
      id
      link
      text
      type
      updatedAt
    }
  }
`;
export const getSalesbarClick = /* GraphQL */ `
  query GetSalesbarClick($id: ID!) {
    getSalesbarClick(id: $id) {
      country
      createdAt
      id
      ipAddress
      link
      page
      updatedAt
    }
  }
`;
export const getSlide = /* GraphQL */ `
  query GetSlide($id: ID!) {
    getSlide(id: $id) {
      createdAt
      description
      id
      lMSModuleSlidesId
      slideSource
      updatedAt
    }
  }
`;
export const getStaff = /* GraphQL */ `
  query GetStaff($id: ID!) {
    getStaff(id: $id) {
      createdAt
      fullName
      id
      image
      linkedIn
      title
      updatedAt
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      courseEnrolled {
        items {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        nextToken
      }
      createdAt
      id
      student {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      studentId
      updatedAt
    }
  }
`;
export const getSurgereForm = /* GraphQL */ `
  query GetSurgereForm($id: ID!) {
    getSurgereForm(id: $id) {
      approved
      company
      createdAt
      email
      id
      name
      title
      updatedAt
    }
  }
`;
export const getTags = /* GraphQL */ `
  query GetTags($id: ID!) {
    getTags(id: $id) {
      createdAt
      id
      lesson {
        items {
          createdAt
          id
          lesson {
            actionCTA
            actionExample
            actionLink
            actionLinkTitle
            actionSubhead
            author
            backdate
            content
            createdAt
            createdBy
            featured
            id
            lastEditedBy
            links {
              nextToken
            }
            media
            mediaType
            objectives
            related
            screengrab
            seoImage
            slides
            slug
            sources {
              nextToken
            }
            status
            subhead
            tags {
              nextToken
            }
            title
            type
            updatedAt
            videoLink
          }
          lessonId
          tags {
            createdAt
            id
            lesson {
              nextToken
            }
            tag
            updatedAt
          }
          tagsId
          updatedAt
        }
        nextToken
      }
      tag
      updatedAt
    }
  }
`;
export const getTestimonial = /* GraphQL */ `
  query GetTestimonial($id: ID!) {
    getTestimonial(id: $id) {
      affiliation
      author
      company
      content
      createdAt
      date
      featured
      headshot
      id
      linkedin
      tags
      title
      updatedAt
      video
    }
  }
`;
export const getTimestamp = /* GraphQL */ `
  query GetTimestamp($id: ID!) {
    getTimestamp(id: $id) {
      createdAt
      description
      id
      time
      updatedAt
    }
  }
`;
export const getTourist = /* GraphQL */ `
  query GetTourist($id: ID!) {
    getTourist(id: $id) {
      company
      createdAt
      email
      fullName
      id
      phone
      tour
      updatedAt
    }
  }
`;
export const getTrackedCourse = /* GraphQL */ `
  query GetTrackedCourse($id: ID!) {
    getTrackedCourse(id: $id) {
      clicks
      courseId
      createdAt
      customer {
        courses {
          items {
            clicks
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        displayName
        email
        highlightColor
        id
        link
        logo
        offered
        offerings
        pdf
        primaryColor
        pscourses {
          items {
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        slide
        status
        updatedAt
        video
      }
      customerId
      id
      updatedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      apss {
        items {
          aPS {
            Registrants {
              nextToken
            }
            Speakers {
              nextToken
            }
            Sponsors {
              nextToken
            }
            codes {
              code
            }
            createdAt
            id
            updatedAt
            year
          }
          aPSId
          createdAt
          id
          updatedAt
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          userId
        }
        nextToken
      }
      bio
      cell
      cmpmForm {
        addressExtra
        areaOfInterest
        background
        birthYear
        cMPMFormUserId
        city
        cmpmGoals
        companyName
        companyTitle
        country
        createdOn
        email
        firstName
        id
        lastName
        linkedin
        moreAboutYou
        optOut
        payment
        paymentConfirmation
        phone
        referral
        sessionApplying
        state
        status
        streetAddress
        updatedOn
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        whyPackaging
        yearGoals
      }
      cmpmFormID
      company
      companyID
      cpsForm {
        addressExtra
        areaOfInterest
        background
        birthYear
        cPSFormUserId
        city
        companyName
        companyTitle
        country
        cpsGoals
        createdOn
        elective
        email
        firstName
        id
        lastName
        linkedin
        moreAboutYou
        optOut
        payment
        paymentConfirmation
        phone
        referral
        sessionApplying
        state
        status
        streetAddress
        updatedOn
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        whyPackaging
        yearGoals
      }
      cpsFormID
      createdAt
      email
      id
      instructorId {
        coursesTaught {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        instructor {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        updatedAt
        userId
      }
      linkedin
      name
      office
      picture
      savedArticles
      savedCourses
      savedLessons
      source
      studentId {
        courseEnrolled {
          items {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          nextToken
        }
        createdAt
        id
        student {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        studentId
        updatedAt
      }
      title
      updatedAt
      userInstructorIdId
      userStudentIdId
    }
  }
`;
export const getWorkshopForm = /* GraphQL */ `
  query GetWorkshopForm($id: ID!) {
    getWorkshopForm(id: $id) {
      audienceSize
      companyName
      createdOn
      email
      eventDate
      eventDescription
      eventLocation
      firstName
      id
      lastName
      phone
      updatedOn
    }
  }
`;
export const includedCoursesByCustomerId = /* GraphQL */ `
  query IncludedCoursesByCustomerId(
    $customerId: ID!
    $filter: ModelIncludedCourseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    includedCoursesByCustomerId(
      customerId: $customerId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        courseId
        createdAt
        customer {
          courses {
            items {
              clicks
              courseId
              createdAt
              customerId
              id
              updatedAt
            }
            nextToken
          }
          createdAt
          displayName
          email
          highlightColor
          id
          link
          logo
          offered
          offerings
          pdf
          primaryColor
          pscourses {
            items {
              courseId
              createdAt
              customerId
              id
              updatedAt
            }
            nextToken
          }
          slide
          status
          updatedAt
          video
        }
        customerId
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const indexTemplateRowsByIndexRowId = /* GraphQL */ `
  query IndexTemplateRowsByIndexRowId(
    $filter: ModelIndexTemplateRowsFilterInput
    $indexRowId: ID!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    indexTemplateRowsByIndexRowId(
      filter: $filter
      indexRowId: $indexRowId
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        indexRow {
          content
          createdAt
          headline
          id
          subhead
          templates {
            items {
              createdAt
              id
              indexRowId
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          type
          updatedAt
        }
        indexRowId
        indexTemplate {
          authors {
            items {
              authorId
              createdAt
              id
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          rows {
            items {
              createdAt
              id
              indexRowId
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          slug
          subhead
          title
          updatedAt
        }
        indexTemplateId
        updatedAt
      }
      nextToken
    }
  }
`;
export const indexTemplateRowsByIndexTemplateId = /* GraphQL */ `
  query IndexTemplateRowsByIndexTemplateId(
    $filter: ModelIndexTemplateRowsFilterInput
    $indexTemplateId: ID!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    indexTemplateRowsByIndexTemplateId(
      filter: $filter
      indexTemplateId: $indexTemplateId
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        indexRow {
          content
          createdAt
          headline
          id
          subhead
          templates {
            items {
              createdAt
              id
              indexRowId
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          type
          updatedAt
        }
        indexRowId
        indexTemplate {
          authors {
            items {
              authorId
              createdAt
              id
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          rows {
            items {
              createdAt
              id
              indexRowId
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          slug
          subhead
          title
          updatedAt
        }
        indexTemplateId
        updatedAt
      }
      nextToken
    }
  }
`;
export const indexTemplatesBySlug = /* GraphQL */ `
  query IndexTemplatesBySlug(
    $filter: ModelIndexTemplateFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    indexTemplatesBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        authors {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        rows {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        slug
        subhead
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const lMSCollectionsBySlug = /* GraphQL */ `
  query LMSCollectionsBySlug(
    $filter: ModelLMSCollectionFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    lMSCollectionsBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        category
        collectionId
        courses
        createdAt
        description
        hours
        id
        instructor
        instructorDescription
        instructorImage
        instructorLink
        lmsLink
        price
        slug
        subtitle
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const lMSCoursesBySlug = /* GraphQL */ `
  query LMSCoursesBySlug(
    $filter: ModelLMSCourseFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    lMSCoursesBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      nextToken
    }
  }
`;
export const lMSLessonsBySlug = /* GraphQL */ `
  query LMSLessonsBySlug(
    $filter: ModelLMSLessonFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    lMSLessonsBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        content
        course {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        media
        modules {
          items {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          nextToken
        }
        objectives
        percentComplete
        slug
        subheadline
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const lMSModulesBySlug = /* GraphQL */ `
  query LMSModulesBySlug(
    $filter: ModelLMSModuleFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    lMSModulesBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        content
        createdAt
        id
        lMSLessonModulesId
        lMSModuleQuizId
        lesson {
          content
          course {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          media
          modules {
            items {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            nextToken
          }
          objectives
          percentComplete
          slug
          subheadline
          title
          updatedAt
        }
        media
        mediaType
        objectives
        quiz {
          answer1
          answer2
          answer3
          answer4
          correctAnswer
          createdAt
          id
          lMSQuizModuleId
          module {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          prompt
          updatedAt
        }
        slides {
          items {
            createdAt
            description
            id
            lMSModuleSlidesId
            slideSource
            updatedAt
          }
          nextToken
        }
        slug
        subheadline
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const lessonClicksByLessonID = /* GraphQL */ `
  query LessonClicksByLessonID(
    $LessonID: String!
    $filter: ModelLessonClickFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    lessonClicksByLessonID(
      LessonID: $LessonID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        LessonID
        country
        createdAt
        format
        id
        ipAddress
        lat
        long
        page
        referrer
        updatedAt
      }
      nextToken
    }
  }
`;
export const lessonTagsByLessonId = /* GraphQL */ `
  query LessonTagsByLessonId(
    $filter: ModelLessonTagsFilterInput
    $lessonId: ID!
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    lessonTagsByLessonId(
      filter: $filter
      lessonId: $lessonId
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        id
        lesson {
          actionCTA
          actionExample
          actionLink
          actionLinkTitle
          actionSubhead
          author
          backdate
          content
          createdAt
          createdBy
          featured
          id
          lastEditedBy
          links {
            items {
              createdAt
              id
              lessonLinksId
              link
              name
              updatedAt
            }
            nextToken
          }
          media
          mediaType
          objectives
          related
          screengrab
          seoImage
          slides
          slug
          sources {
            items {
              createdAt
              id
              lessonSourcesId
              link
              name
              position
              updatedAt
            }
            nextToken
          }
          status
          subhead
          tags {
            items {
              createdAt
              id
              lessonId
              tagsId
              updatedAt
            }
            nextToken
          }
          title
          type
          updatedAt
          videoLink
        }
        lessonId
        tags {
          createdAt
          id
          lesson {
            items {
              createdAt
              id
              lessonId
              tagsId
              updatedAt
            }
            nextToken
          }
          tag
          updatedAt
        }
        tagsId
        updatedAt
      }
      nextToken
    }
  }
`;
export const lessonTagsByTagsId = /* GraphQL */ `
  query LessonTagsByTagsId(
    $filter: ModelLessonTagsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $tagsId: ID!
  ) {
    lessonTagsByTagsId(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      tagsId: $tagsId
    ) {
      items {
        createdAt
        id
        lesson {
          actionCTA
          actionExample
          actionLink
          actionLinkTitle
          actionSubhead
          author
          backdate
          content
          createdAt
          createdBy
          featured
          id
          lastEditedBy
          links {
            items {
              createdAt
              id
              lessonLinksId
              link
              name
              updatedAt
            }
            nextToken
          }
          media
          mediaType
          objectives
          related
          screengrab
          seoImage
          slides
          slug
          sources {
            items {
              createdAt
              id
              lessonSourcesId
              link
              name
              position
              updatedAt
            }
            nextToken
          }
          status
          subhead
          tags {
            items {
              createdAt
              id
              lessonId
              tagsId
              updatedAt
            }
            nextToken
          }
          title
          type
          updatedAt
          videoLink
        }
        lessonId
        tags {
          createdAt
          id
          lesson {
            items {
              createdAt
              id
              lessonId
              tagsId
              updatedAt
            }
            nextToken
          }
          tag
          updatedAt
        }
        tagsId
        updatedAt
      }
      nextToken
    }
  }
`;
export const lessonsBySlug = /* GraphQL */ `
  query LessonsBySlug(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
    $slug: String!
    $sortDirection: ModelSortDirection
  ) {
    lessonsBySlug(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      slug: $slug
      sortDirection: $sortDirection
    ) {
      items {
        actionCTA
        actionExample
        actionLink
        actionLinkTitle
        actionSubhead
        author
        backdate
        content
        createdAt
        createdBy
        featured
        id
        lastEditedBy
        links {
          items {
            createdAt
            id
            lessonLinksId
            link
            name
            updatedAt
          }
          nextToken
        }
        media
        mediaType
        objectives
        related
        screengrab
        seoImage
        slides
        slug
        sources {
          items {
            createdAt
            id
            lessonSourcesId
            link
            name
            position
            updatedAt
          }
          nextToken
        }
        status
        subhead
        tags {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        title
        type
        updatedAt
        videoLink
      }
      nextToken
    }
  }
`;
export const listAPS = /* GraphQL */ `
  query ListAPS($filter: ModelAPSFilterInput, $limit: Int, $nextToken: String) {
    listAPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Registrants {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        Speakers {
          items {
            aPSSpeakersId
            apsHistory {
              createdAt
              id
              updatedAt
              year
            }
            bio
            company
            createdAt
            email
            firstName
            headshot
            id
            lastName
            linkedin
            mediaConsent
            phone
            presentationSummary
            presentationTitle
            privacyConsent
            title
            updatedAt
          }
          nextToken
        }
        Sponsors {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        codes {
          code
        }
        createdAt
        id
        updatedAt
        year
      }
      nextToken
    }
  }
`;
export const listAPSRegistrants = /* GraphQL */ `
  query ListAPSRegistrants(
    $filter: ModelAPSRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSRegistrants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        code
        codeRequested
        codeSent
        company
        createdAt
        email
        id
        innovationWorkshop
        name
        phone
        plantTour
        registrationReceived
        speedNetworking
        title
        updatedAt
        welcomeEmailSent
        worksWith
        year
      }
      nextToken
    }
  }
`;
export const listAPSSpeaker2024s = /* GraphQL */ `
  query ListAPSSpeaker2024s(
    $filter: ModelAPSSpeaker2024FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSpeaker2024s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        bio
        company
        createdAt
        email
        firstName
        headshot
        id
        lastName
        linkedin
        mediaConsent
        phone
        presentationSummary
        presentationTitle
        privacyConsent
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAPSSpeakers = /* GraphQL */ `
  query ListAPSSpeakers(
    $filter: ModelAPSSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        aPSSpeakersId
        apsHistory {
          Registrants {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          Speakers {
            items {
              aPSSpeakersId
              bio
              company
              createdAt
              email
              firstName
              headshot
              id
              lastName
              linkedin
              mediaConsent
              phone
              presentationSummary
              presentationTitle
              privacyConsent
              title
              updatedAt
            }
            nextToken
          }
          Sponsors {
            items {
              aPSId
              companyId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          codes {
            code
          }
          createdAt
          id
          updatedAt
          year
        }
        bio
        company
        createdAt
        email
        firstName
        headshot
        id
        lastName
        linkedin
        mediaConsent
        phone
        presentationSummary
        presentationTitle
        privacyConsent
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAPSSponsors = /* GraphQL */ `
  query ListAPSSponsors(
    $filter: ModelAPSSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        aPS {
          Registrants {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          Speakers {
            items {
              aPSSpeakersId
              bio
              company
              createdAt
              email
              firstName
              headshot
              id
              lastName
              linkedin
              mediaConsent
              phone
              presentationSummary
              presentationTitle
              privacyConsent
              title
              updatedAt
            }
            nextToken
          }
          Sponsors {
            items {
              aPSId
              companyId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          codes {
            code
          }
          createdAt
          id
          updatedAt
          year
        }
        aPSId
        company {
          Employees {
            items {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            nextToken
          }
          apsID {
            items {
              aPSId
              companyId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          city
          createdAt
          email
          id
          name
          phone
          state
          street_1
          street_2
          updatedAt
          website
          zip
        }
        companyId
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAPSTicketRegistrants = /* GraphQL */ `
  query ListAPSTicketRegistrants(
    $filter: ModelAPSTicketRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSTicketRegistrants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        code
        company
        createdAt
        email
        id
        innovationWorkshop
        name
        phone
        plantTour
        registrationReceived
        speedNetworking
        title
        updatedAt
        welcomeEmailSent
        worksWith
        year
      }
      nextToken
    }
  }
`;
export const listAPSTickets = /* GraphQL */ `
  query ListAPSTickets(
    $filter: ModelAPSTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        company
        createdAt
        email
        id
        name
        paymentConfirmation
        phone
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAPSUsers = /* GraphQL */ `
  query ListAPSUsers(
    $filter: ModelAPSUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAPSUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        aPS {
          Registrants {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          Speakers {
            items {
              aPSSpeakersId
              bio
              company
              createdAt
              email
              firstName
              headshot
              id
              lastName
              linkedin
              mediaConsent
              phone
              presentationSummary
              presentationTitle
              privacyConsent
              title
              updatedAt
            }
            nextToken
          }
          Sponsors {
            items {
              aPSId
              companyId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          codes {
            code
          }
          createdAt
          id
          updatedAt
          year
        }
        aPSId
        createdAt
        id
        updatedAt
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        userId
      }
      nextToken
    }
  }
`;
export const listAddOnRegistrants = /* GraphQL */ `
  query ListAddOnRegistrants(
    $filter: ModelAddOnRegistrantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddOnRegistrants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        company
        createdAt
        email
        fullName
        id
        tour
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAppStarts = /* GraphQL */ `
  query ListAppStarts(
    $filter: ModelAppStartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppStarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdOn
        email
        firstName
        id
        lastName
        phone
        source
        sourceUrl
        updatedOn
      }
      nextToken
    }
  }
`;
export const listApplicationStarts = /* GraphQL */ `
  query ListApplicationStarts(
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelApplicationStartFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listApplicationStarts(
      createdAt: $createdAt
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        createdAt
        email
        firstName
        id
        lastName
        phone
        source
        sourceUrl
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAristosForms = /* GraphQL */ `
  query ListAristosForms(
    $filter: ModelAristosFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAristosForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        approved
        company
        createdAt
        email
        id
        name
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listArticleRelatedCourses = /* GraphQL */ `
  query ListArticleRelatedCourses(
    $filter: ModelArticleRelatedCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticleRelatedCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        article {
          content
          createdAt
          id
          media
          relatedCourses {
            items {
              articleId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          seoImage
          slug
          subhead
          tags
          title
          updatedAt
        }
        articleId
        course {
          articles {
            items {
              articleId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          category
          certificate {
            items {
              certificateId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          createdAt
          hour
          id
          lessons
          media
          price
          slug
          subhead
          title
          updatedAt
          video
          videos
        }
        courseId
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const listArticles = /* GraphQL */ `
  query ListArticles(
    $filter: ModelArticleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        media
        relatedCourses {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        seoImage
        slug
        subhead
        tags
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAuthorTemplates = /* GraphQL */ `
  query ListAuthorTemplates(
    $filter: ModelAuthorTemplatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthorTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        author {
          company
          createdAt
          headshot
          id
          linkedIn
          name
          templates {
            items {
              authorId
              createdAt
              id
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          title
          updatedAt
        }
        authorId
        createdAt
        id
        indexTemplate {
          authors {
            items {
              authorId
              createdAt
              id
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          rows {
            items {
              createdAt
              id
              indexRowId
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          slug
          subhead
          title
          updatedAt
        }
        indexTemplateId
        updatedAt
      }
      nextToken
    }
  }
`;
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        company
        createdAt
        headshot
        id
        linkedIn
        name
        templates {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        author
        content
        createdAt
        date
        id
        media
        slug
        tags
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listBoschForms = /* GraphQL */ `
  query ListBoschForms(
    $filter: ModelBoschFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoschForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        approved
        company
        createdAt
        email
        id
        name
        title
        topicFour
        topicOne
        topicThree
        topicTwo
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCMPMForms = /* GraphQL */ `
  query ListCMPMForms(
    $filter: ModelCMPMFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCMPMForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        addressExtra
        areaOfInterest
        background
        birthYear
        cMPMFormUserId
        city
        cmpmGoals
        companyName
        companyTitle
        country
        createdOn
        email
        firstName
        id
        lastName
        linkedin
        moreAboutYou
        optOut
        payment
        paymentConfirmation
        phone
        referral
        sessionApplying
        state
        status
        streetAddress
        updatedOn
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        whyPackaging
        yearGoals
      }
      nextToken
    }
  }
`;
export const listCMPMSessions = /* GraphQL */ `
  query ListCMPMSessions(
    $filter: ModelCMPMSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCMPMSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        deadline
        endDate
        id
        startDate
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCPSForms = /* GraphQL */ `
  query ListCPSForms(
    $filter: ModelCPSFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCPSForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        addressExtra
        areaOfInterest
        background
        birthYear
        cPSFormUserId
        city
        companyName
        companyTitle
        country
        cpsGoals
        createdOn
        elective
        email
        firstName
        id
        lastName
        linkedin
        moreAboutYou
        optOut
        payment
        paymentConfirmation
        phone
        referral
        sessionApplying
        state
        status
        streetAddress
        updatedOn
        user {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        whyPackaging
        yearGoals
      }
      nextToken
    }
  }
`;
export const listCareers = /* GraphQL */ `
  query ListCareers(
    $filter: ModelCareerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCareers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        altName
        apcCopy
        beverageCopy
        cmpmCopy
        coreCopy
        cpsCopy
        createdAt
        dayInLife {
          items {
            careerDayInLifeId
            createdAt
            desc
            icon
            id
            name
            updatedAt
          }
          nextToken
        }
        electiveCopy
        freeCopy
        id
        media
        slug
        subhead
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCertAppStarts = /* GraphQL */ `
  query ListCertAppStarts(
    $filter: ModelCertAppStartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertAppStarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        country
        createdAt
        email
        firstName
        id
        ipAddress
        lastName
        phone
        source
        sourceUrl
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCertificateCourses = /* GraphQL */ `
  query ListCertificateCourses(
    $filter: ModelCertificateCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificateCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        certificate {
          brochure_link
          ceus_total
          courses {
            items {
              certificateId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          courses_total
          createdAt
          demoLink
          hours_total
          id
          lmsLink
          price_features
          price_full
          price_monthly
          slug
          title
          title_button_1_link
          title_button_1_text
          title_button_2_link
          title_button_2_text
          title_callout_1
          title_callout_2
          title_image
          title_text
          updatedAt
          video
          whoText
        }
        certificateId
        course {
          articles {
            items {
              articleId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          category
          certificate {
            items {
              certificateId
              courseId
              createdAt
              id
              updatedAt
            }
            nextToken
          }
          createdAt
          hour
          id
          lessons
          media
          price
          slug
          subhead
          title
          updatedAt
          video
          videos
        }
        courseId
        createdAt
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCertificates = /* GraphQL */ `
  query ListCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        brochure_link
        ceus_total
        courses {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        courses_total
        createdAt
        demoLink
        hours_total
        id
        lmsLink
        price_features
        price_full
        price_monthly
        slug
        title
        title_button_1_link
        title_button_1_text
        title_button_2_link
        title_button_2_text
        title_callout_1
        title_callout_2
        title_image
        title_text
        updatedAt
        video
        whoText
      }
      nextToken
    }
  }
`;
export const listCirriculumCourses = /* GraphQL */ `
  query ListCirriculumCourses(
    $filter: ModelCirriculumCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCirriculumCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        createdAt
        id
        lMSCirriculum {
          Courses {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          description
          id
          shorthand
          slug
          title
          updatedAt
        }
        lMSCirriculumId
        lMSCourse {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        lMSCourseId
        updatedAt
      }
      nextToken
    }
  }
`;
export const listClicks = /* GraphQL */ `
  query ListClicks(
    $filter: ModelClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        identifier
        ipAddress
        location
        nextPath
        path
        ref
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Employees {
          items {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          nextToken
        }
        apsID {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            company {
              city
              createdAt
              email
              id
              name
              phone
              state
              street_1
              street_2
              updatedAt
              website
              zip
            }
            companyId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        city
        createdAt
        email
        id
        name
        phone
        state
        street_1
        street_2
        updatedAt
        website
        zip
      }
      nextToken
    }
  }
`;
export const listCourseClicks = /* GraphQL */ `
  query ListCourseClicks(
    $filter: ModelCourseClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        country
        courseID
        createdAt
        format
        id
        ipAddress
        lat
        long
        nextPath
        page
        referrer
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCourseInstructors = /* GraphQL */ `
  query ListCourseInstructors(
    $filter: ModelCourseInstructorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseInstructors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        createdAt
        id
        instructor {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        instructorId
        lMSCourse {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        lMSCourseId
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCourseLessons = /* GraphQL */ `
  query ListCourseLessons(
    $filter: ModelCourseLessonsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        lMSCourse {
          altLink
          category
          categoryArray
          cirriculum {
            items {
              createdAt
              id
              lMSCirriculumId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          collection
          courseId
          createdAt
          demo
          hours
          id
          infoSheet
          instructors {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          lessons
          link
          lmsLessons {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          objectives
          partOf
          percentComplete
          preview
          price
          seoImage
          shortDescription
          slug
          studentCourseEnrolledId
          subheadline
          title
          trial_link
          type
          updatedAt
          videos
          what_learned
        }
        lMSCourseId
        lMSLesson {
          content
          course {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          media
          modules {
            items {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            nextToken
          }
          objectives
          percentComplete
          slug
          subheadline
          title
          updatedAt
        }
        lMSLessonId
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCourseSearches = /* GraphQL */ `
  query ListCourseSearches(
    $filter: ModelCourseSearchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseSearches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        country
        createdAt
        id
        ipAddress
        term
        updatedAt
      }
      nextToken
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        articles {
          items {
            article {
              content
              createdAt
              id
              media
              seoImage
              slug
              subhead
              tags
              title
              updatedAt
            }
            articleId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        category
        certificate {
          items {
            certificate {
              brochure_link
              ceus_total
              courses_total
              createdAt
              demoLink
              hours_total
              id
              lmsLink
              price_features
              price_full
              price_monthly
              slug
              title
              title_button_1_link
              title_button_1_text
              title_button_2_link
              title_button_2_text
              title_callout_1
              title_callout_2
              title_image
              title_text
              updatedAt
              video
              whoText
            }
            certificateId
            course {
              category
              createdAt
              hour
              id
              lessons
              media
              price
              slug
              subhead
              title
              updatedAt
              video
              videos
            }
            courseId
            createdAt
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        hour
        id
        lessons
        media
        price
        slug
        subhead
        title
        updatedAt
        video
        videos
      }
      nextToken
    }
  }
`;
export const listCustomerLibaries = /* GraphQL */ `
  query ListCustomerLibaries(
    $filter: ModelCustomerLibaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomerLibaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        addOns
        clientCourses
        createdAt
        description
        displayName
        email
        highlightColor
        id
        link
        logo
        pdf
        primaryColor
        pschoolCourses
        slide
        slug
        status
        updatedAt
        video
      }
      nextToken
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        courses {
          items {
            clicks
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        createdAt
        displayName
        email
        highlightColor
        id
        link
        logo
        offered
        offerings
        pdf
        primaryColor
        pscourses {
          items {
            courseId
            createdAt
            customer {
              createdAt
              displayName
              email
              highlightColor
              id
              link
              logo
              offered
              offerings
              pdf
              primaryColor
              slide
              status
              updatedAt
              video
            }
            customerId
            id
            updatedAt
          }
          nextToken
        }
        slide
        status
        updatedAt
        video
      }
      nextToken
    }
  }
`;
export const listDayInLifeItems = /* GraphQL */ `
  query ListDayInLifeItems(
    $filter: ModelDayInLifeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDayInLifeItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        careerDayInLifeId
        createdAt
        desc
        icon
        id
        name
        updatedAt
      }
      nextToken
    }
  }
`;
export const listGuardianForms = /* GraphQL */ `
  query ListGuardianForms(
    $filter: ModelGuardianFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuardianForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        approved
        company
        createdAt
        email
        id
        name
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listIncludedCourses = /* GraphQL */ `
  query ListIncludedCourses(
    $filter: ModelIncludedCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncludedCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        courseId
        createdAt
        customer {
          courses {
            items {
              clicks
              courseId
              createdAt
              customerId
              id
              updatedAt
            }
            nextToken
          }
          createdAt
          displayName
          email
          highlightColor
          id
          link
          logo
          offered
          offerings
          pdf
          primaryColor
          pscourses {
            items {
              courseId
              createdAt
              customerId
              id
              updatedAt
            }
            nextToken
          }
          slide
          status
          updatedAt
          video
        }
        customerId
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const listIndexRows = /* GraphQL */ `
  query ListIndexRows(
    $filter: ModelIndexRowFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndexRows(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        headline
        id
        subhead
        templates {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const listIndexTemplateRows = /* GraphQL */ `
  query ListIndexTemplateRows(
    $filter: ModelIndexTemplateRowsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndexTemplateRows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        createdAt
        id
        indexRow {
          content
          createdAt
          headline
          id
          subhead
          templates {
            items {
              createdAt
              id
              indexRowId
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          type
          updatedAt
        }
        indexRowId
        indexTemplate {
          authors {
            items {
              authorId
              createdAt
              id
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          rows {
            items {
              createdAt
              id
              indexRowId
              indexTemplateId
              updatedAt
            }
            nextToken
          }
          slug
          subhead
          title
          updatedAt
        }
        indexTemplateId
        updatedAt
      }
      nextToken
    }
  }
`;
export const listIndexTemplates = /* GraphQL */ `
  query ListIndexTemplates(
    $filter: ModelIndexTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIndexTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        authors {
          items {
            author {
              company
              createdAt
              headshot
              id
              linkedIn
              name
              title
              updatedAt
            }
            authorId
            createdAt
            id
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        rows {
          items {
            createdAt
            id
            indexRow {
              content
              createdAt
              headline
              id
              subhead
              type
              updatedAt
            }
            indexRowId
            indexTemplate {
              createdAt
              id
              slug
              subhead
              title
              updatedAt
            }
            indexTemplateId
            updatedAt
          }
          nextToken
        }
        slug
        subhead
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listInstructors = /* GraphQL */ `
  query ListInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        coursesTaught {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        instructor {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        updatedAt
        userId
      }
      nextToken
    }
  }
`;
export const listLMSCirriculums = /* GraphQL */ `
  query ListLMSCirriculums(
    $filter: ModelLMSCirriculumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSCirriculums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Courses {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        createdAt
        description
        id
        shorthand
        slug
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLMSCollections = /* GraphQL */ `
  query ListLMSCollections(
    $filter: ModelLMSCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        category
        collectionId
        courses
        createdAt
        description
        hours
        id
        instructor
        instructorDescription
        instructorImage
        instructorLink
        lmsLink
        price
        slug
        subtitle
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLMSCourses = /* GraphQL */ `
  query ListLMSCourses(
    $filter: ModelLMSCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        altLink
        category
        categoryArray
        cirriculum {
          items {
            createdAt
            id
            lMSCirriculum {
              createdAt
              description
              id
              shorthand
              slug
              title
              updatedAt
            }
            lMSCirriculumId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        collection
        courseId
        createdAt
        demo
        hours
        id
        infoSheet
        instructors {
          items {
            createdAt
            id
            instructor {
              createdAt
              id
              updatedAt
              userId
            }
            instructorId
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            updatedAt
          }
          nextToken
        }
        lessons
        link
        lmsLessons {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        objectives
        partOf
        percentComplete
        preview
        price
        seoImage
        shortDescription
        slug
        studentCourseEnrolledId
        subheadline
        title
        trial_link
        type
        updatedAt
        videos
        what_learned
      }
      nextToken
    }
  }
`;
export const listLMSLessons = /* GraphQL */ `
  query ListLMSLessons(
    $filter: ModelLMSLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        course {
          items {
            createdAt
            id
            lMSCourse {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            lMSCourseId
            lMSLesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            lMSLessonId
            updatedAt
          }
          nextToken
        }
        createdAt
        id
        media
        modules {
          items {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          nextToken
        }
        objectives
        percentComplete
        slug
        subheadline
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLMSModules = /* GraphQL */ `
  query ListLMSModules(
    $filter: ModelLMSModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        lMSLessonModulesId
        lMSModuleQuizId
        lesson {
          content
          course {
            items {
              createdAt
              id
              lMSCourseId
              lMSLessonId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          media
          modules {
            items {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            nextToken
          }
          objectives
          percentComplete
          slug
          subheadline
          title
          updatedAt
        }
        media
        mediaType
        objectives
        quiz {
          answer1
          answer2
          answer3
          answer4
          correctAnswer
          createdAt
          id
          lMSQuizModuleId
          module {
            content
            createdAt
            id
            lMSLessonModulesId
            lMSModuleQuizId
            lesson {
              content
              createdAt
              id
              media
              objectives
              percentComplete
              slug
              subheadline
              title
              updatedAt
            }
            media
            mediaType
            objectives
            quiz {
              answer1
              answer2
              answer3
              answer4
              correctAnswer
              createdAt
              id
              lMSQuizModuleId
              prompt
              updatedAt
            }
            slides {
              nextToken
            }
            slug
            subheadline
            title
            updatedAt
          }
          prompt
          updatedAt
        }
        slides {
          items {
            createdAt
            description
            id
            lMSModuleSlidesId
            slideSource
            updatedAt
          }
          nextToken
        }
        slug
        subheadline
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLMSQuizs = /* GraphQL */ `
  query ListLMSQuizs(
    $filter: ModelLMSQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLMSQuizs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        answer1
        answer2
        answer3
        answer4
        correctAnswer
        createdAt
        id
        lMSQuizModuleId
        module {
          content
          createdAt
          id
          lMSLessonModulesId
          lMSModuleQuizId
          lesson {
            content
            course {
              nextToken
            }
            createdAt
            id
            media
            modules {
              nextToken
            }
            objectives
            percentComplete
            slug
            subheadline
            title
            updatedAt
          }
          media
          mediaType
          objectives
          quiz {
            answer1
            answer2
            answer3
            answer4
            correctAnswer
            createdAt
            id
            lMSQuizModuleId
            module {
              content
              createdAt
              id
              lMSLessonModulesId
              lMSModuleQuizId
              media
              mediaType
              objectives
              slug
              subheadline
              title
              updatedAt
            }
            prompt
            updatedAt
          }
          slides {
            items {
              createdAt
              description
              id
              lMSModuleSlidesId
              slideSource
              updatedAt
            }
            nextToken
          }
          slug
          subheadline
          title
          updatedAt
        }
        prompt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLessonClicks = /* GraphQL */ `
  query ListLessonClicks(
    $filter: ModelLessonClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        LessonID
        country
        createdAt
        format
        id
        ipAddress
        lat
        long
        page
        referrer
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLessonLinks = /* GraphQL */ `
  query ListLessonLinks(
    $filter: ModelLessonLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        lessonLinksId
        link
        name
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLessonSources = /* GraphQL */ `
  query ListLessonSources(
    $filter: ModelLessonSourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        lessonSourcesId
        link
        name
        position
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLessonTags = /* GraphQL */ `
  query ListLessonTags(
    $filter: ModelLessonTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        lesson {
          actionCTA
          actionExample
          actionLink
          actionLinkTitle
          actionSubhead
          author
          backdate
          content
          createdAt
          createdBy
          featured
          id
          lastEditedBy
          links {
            items {
              createdAt
              id
              lessonLinksId
              link
              name
              updatedAt
            }
            nextToken
          }
          media
          mediaType
          objectives
          related
          screengrab
          seoImage
          slides
          slug
          sources {
            items {
              createdAt
              id
              lessonSourcesId
              link
              name
              position
              updatedAt
            }
            nextToken
          }
          status
          subhead
          tags {
            items {
              createdAt
              id
              lessonId
              tagsId
              updatedAt
            }
            nextToken
          }
          title
          type
          updatedAt
          videoLink
        }
        lessonId
        tags {
          createdAt
          id
          lesson {
            items {
              createdAt
              id
              lessonId
              tagsId
              updatedAt
            }
            nextToken
          }
          tag
          updatedAt
        }
        tagsId
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        actionCTA
        actionExample
        actionLink
        actionLinkTitle
        actionSubhead
        author
        backdate
        content
        createdAt
        createdBy
        featured
        id
        lastEditedBy
        links {
          items {
            createdAt
            id
            lessonLinksId
            link
            name
            updatedAt
          }
          nextToken
        }
        media
        mediaType
        objectives
        related
        screengrab
        seoImage
        slides
        slug
        sources {
          items {
            createdAt
            id
            lessonSourcesId
            link
            name
            position
            updatedAt
          }
          nextToken
        }
        status
        subhead
        tags {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        title
        type
        updatedAt
        videoLink
      }
      nextToken
    }
  }
`;
export const listMorrisetteForms = /* GraphQL */ `
  query ListMorrisetteForms(
    $filter: ModelMorrisetteFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMorrisetteForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        approved
        company
        createdAt
        email
        id
        name
        preference
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listObjectives = /* GraphQL */ `
  query ListObjectives(
    $filter: ModelObjectiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listObjectives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        completed
        createdAt
        id
        objective
        updatedAt
      }
      nextToken
    }
  }
`;
export const listSalesBars = /* GraphQL */ `
  query ListSalesBars(
    $filter: ModelSalesBarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesBars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        icon
        id
        link
        text
        type
        updatedAt
      }
      nextToken
    }
  }
`;
export const listSalesbarClicks = /* GraphQL */ `
  query ListSalesbarClicks(
    $filter: ModelSalesbarClickFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesbarClicks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        country
        createdAt
        id
        ipAddress
        link
        page
        updatedAt
      }
      nextToken
    }
  }
`;
export const listSlides = /* GraphQL */ `
  query ListSlides(
    $filter: ModelSlideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSlides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        description
        id
        lMSModuleSlidesId
        slideSource
        updatedAt
      }
      nextToken
    }
  }
`;
export const listStaff = /* GraphQL */ `
  query ListStaff(
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaff(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        fullName
        id
        image
        linkedIn
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        courseEnrolled {
          items {
            altLink
            category
            categoryArray
            cirriculum {
              nextToken
            }
            collection
            courseId
            createdAt
            demo
            hours
            id
            infoSheet
            instructors {
              nextToken
            }
            lessons
            link
            lmsLessons {
              nextToken
            }
            objectives
            partOf
            percentComplete
            preview
            price
            seoImage
            shortDescription
            slug
            studentCourseEnrolledId
            subheadline
            title
            trial_link
            type
            updatedAt
            videos
            what_learned
          }
          nextToken
        }
        createdAt
        id
        student {
          apss {
            items {
              aPSId
              createdAt
              id
              updatedAt
              userId
            }
            nextToken
          }
          bio
          cell
          cmpmForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cMPMFormUserId
            city
            cmpmGoals
            companyName
            companyTitle
            country
            createdOn
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cmpmFormID
          company
          companyID
          cpsForm {
            addressExtra
            areaOfInterest
            background
            birthYear
            cPSFormUserId
            city
            companyName
            companyTitle
            country
            cpsGoals
            createdOn
            elective
            email
            firstName
            id
            lastName
            linkedin
            moreAboutYou
            optOut
            payment
            paymentConfirmation
            phone
            referral
            sessionApplying
            state
            status
            streetAddress
            updatedOn
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            whyPackaging
            yearGoals
          }
          cpsFormID
          createdAt
          email
          id
          instructorId {
            coursesTaught {
              nextToken
            }
            createdAt
            id
            instructor {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            updatedAt
            userId
          }
          linkedin
          name
          office
          picture
          savedArticles
          savedCourses
          savedLessons
          source
          studentId {
            courseEnrolled {
              nextToken
            }
            createdAt
            id
            student {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            studentId
            updatedAt
          }
          title
          updatedAt
          userInstructorIdId
          userStudentIdId
        }
        studentId
        updatedAt
      }
      nextToken
    }
  }
`;
export const listSurgereForms = /* GraphQL */ `
  query ListSurgereForms(
    $filter: ModelSurgereFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSurgereForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        approved
        company
        createdAt
        email
        id
        name
        title
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        id
        lesson {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        tag
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTestimonials = /* GraphQL */ `
  query ListTestimonials(
    $filter: ModelTestimonialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestimonials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        affiliation
        author
        company
        content
        createdAt
        date
        featured
        headshot
        id
        linkedin
        tags
        title
        updatedAt
        video
      }
      nextToken
    }
  }
`;
export const listTimestamps = /* GraphQL */ `
  query ListTimestamps(
    $filter: ModelTimestampFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimestamps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        createdAt
        description
        id
        time
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTourists = /* GraphQL */ `
  query ListTourists(
    $filter: ModelTouristFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTourists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        company
        createdAt
        email
        fullName
        id
        phone
        tour
        updatedAt
      }
      nextToken
    }
  }
`;
export const listTrackedCourses = /* GraphQL */ `
  query ListTrackedCourses(
    $filter: ModelTrackedCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrackedCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        clicks
        courseId
        createdAt
        customer {
          courses {
            items {
              clicks
              courseId
              createdAt
              customerId
              id
              updatedAt
            }
            nextToken
          }
          createdAt
          displayName
          email
          highlightColor
          id
          link
          logo
          offered
          offerings
          pdf
          primaryColor
          pscourses {
            items {
              courseId
              createdAt
              customerId
              id
              updatedAt
            }
            nextToken
          }
          slide
          status
          updatedAt
          video
        }
        customerId
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      nextToken
    }
  }
`;
export const listWorkshopForms = /* GraphQL */ `
  query ListWorkshopForms(
    $filter: ModelWorkshopFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkshopForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        audienceSize
        companyName
        createdOn
        email
        eventDate
        eventDescription
        eventLocation
        firstName
        id
        lastName
        phone
        updatedOn
      }
      nextToken
    }
  }
`;
export const tagsByTag = /* GraphQL */ `
  query TagsByTag(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
    $tag: String!
  ) {
    tagsByTag(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
      tag: $tag
    ) {
      items {
        createdAt
        id
        lesson {
          items {
            createdAt
            id
            lesson {
              actionCTA
              actionExample
              actionLink
              actionLinkTitle
              actionSubhead
              author
              backdate
              content
              createdAt
              createdBy
              featured
              id
              lastEditedBy
              media
              mediaType
              objectives
              related
              screengrab
              seoImage
              slides
              slug
              status
              subhead
              title
              type
              updatedAt
              videoLink
            }
            lessonId
            tags {
              createdAt
              id
              tag
              updatedAt
            }
            tagsId
            updatedAt
          }
          nextToken
        }
        tag
        updatedAt
      }
      nextToken
    }
  }
`;
export const touristsByEmail = /* GraphQL */ `
  query TouristsByEmail(
    $email: String!
    $filter: ModelTouristFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    touristsByEmail(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        company
        createdAt
        email
        fullName
        id
        phone
        tour
        updatedAt
      }
      nextToken
    }
  }
`;
export const trackedCoursesByCustomerIdAndClicks = /* GraphQL */ `
  query TrackedCoursesByCustomerIdAndClicks(
    $clicks: ModelIntKeyConditionInput
    $customerId: ID!
    $filter: ModelTrackedCourseFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    trackedCoursesByCustomerIdAndClicks(
      clicks: $clicks
      customerId: $customerId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        clicks
        courseId
        createdAt
        customer {
          courses {
            items {
              clicks
              courseId
              createdAt
              customerId
              id
              updatedAt
            }
            nextToken
          }
          createdAt
          displayName
          email
          highlightColor
          id
          link
          logo
          offered
          offerings
          pdf
          primaryColor
          pscourses {
            items {
              courseId
              createdAt
              customerId
              id
              updatedAt
            }
            nextToken
          }
          slide
          status
          updatedAt
          video
        }
        customerId
        id
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByCompanyID = /* GraphQL */ `
  query UsersByCompanyID(
    $companyID: ID!
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    usersByCompanyID(
      companyID: $companyID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      nextToken
    }
  }
`;
export const usersByEmail = /* GraphQL */ `
  query UsersByEmail(
    $email: String!
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    usersByEmail(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      nextToken
    }
  }
`;
export const usersByName = /* GraphQL */ `
  query UsersByName(
    $filter: ModelUserFilterInput
    $limit: Int
    $name: String!
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    usersByName(
      filter: $filter
      limit: $limit
      name: $name
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        apss {
          items {
            aPS {
              createdAt
              id
              updatedAt
              year
            }
            aPSId
            createdAt
            id
            updatedAt
            user {
              bio
              cell
              cmpmFormID
              company
              companyID
              cpsFormID
              createdAt
              email
              id
              linkedin
              name
              office
              picture
              savedArticles
              savedCourses
              savedLessons
              source
              title
              updatedAt
              userInstructorIdId
              userStudentIdId
            }
            userId
          }
          nextToken
        }
        bio
        cell
        cmpmForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cMPMFormUserId
          city
          cmpmGoals
          companyName
          companyTitle
          country
          createdOn
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cmpmFormID
        company
        companyID
        cpsForm {
          addressExtra
          areaOfInterest
          background
          birthYear
          cPSFormUserId
          city
          companyName
          companyTitle
          country
          cpsGoals
          createdOn
          elective
          email
          firstName
          id
          lastName
          linkedin
          moreAboutYou
          optOut
          payment
          paymentConfirmation
          phone
          referral
          sessionApplying
          state
          status
          streetAddress
          updatedOn
          user {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          whyPackaging
          yearGoals
        }
        cpsFormID
        createdAt
        email
        id
        instructorId {
          coursesTaught {
            items {
              createdAt
              id
              instructorId
              lMSCourseId
              updatedAt
            }
            nextToken
          }
          createdAt
          id
          instructor {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          updatedAt
          userId
        }
        linkedin
        name
        office
        picture
        savedArticles
        savedCourses
        savedLessons
        source
        studentId {
          courseEnrolled {
            items {
              altLink
              category
              categoryArray
              collection
              courseId
              createdAt
              demo
              hours
              id
              infoSheet
              lessons
              link
              objectives
              partOf
              percentComplete
              preview
              price
              seoImage
              shortDescription
              slug
              studentCourseEnrolledId
              subheadline
              title
              trial_link
              type
              updatedAt
              videos
              what_learned
            }
            nextToken
          }
          createdAt
          id
          student {
            apss {
              nextToken
            }
            bio
            cell
            cmpmForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cMPMFormUserId
              city
              cmpmGoals
              companyName
              companyTitle
              country
              createdOn
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cmpmFormID
            company
            companyID
            cpsForm {
              addressExtra
              areaOfInterest
              background
              birthYear
              cPSFormUserId
              city
              companyName
              companyTitle
              country
              cpsGoals
              createdOn
              elective
              email
              firstName
              id
              lastName
              linkedin
              moreAboutYou
              optOut
              payment
              paymentConfirmation
              phone
              referral
              sessionApplying
              state
              status
              streetAddress
              updatedOn
              whyPackaging
              yearGoals
            }
            cpsFormID
            createdAt
            email
            id
            instructorId {
              createdAt
              id
              updatedAt
              userId
            }
            linkedin
            name
            office
            picture
            savedArticles
            savedCourses
            savedLessons
            source
            studentId {
              createdAt
              id
              studentId
              updatedAt
            }
            title
            updatedAt
            userInstructorIdId
            userStudentIdId
          }
          studentId
          updatedAt
        }
        title
        updatedAt
        userInstructorIdId
        userStudentIdId
      }
      nextToken
    }
  }
`;
export const workshopFormsByEmail = /* GraphQL */ `
  query WorkshopFormsByEmail(
    $email: String!
    $filter: ModelWorkshopFormFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    workshopFormsByEmail(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        audienceSize
        companyName
        createdOn
        email
        eventDate
        eventDescription
        eventLocation
        firstName
        id
        lastName
        phone
        updatedOn
      }
      nextToken
    }
  }
`;
