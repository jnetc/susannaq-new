import type { IData } from "@Types";

export default async function FetchFromDatoCMS() {
  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${import.meta.env.PUBLIC_DATOCMS_API_KEY}`,
    },
    body: JSON.stringify({
      query: `
          {
            _site {
              ...SiteFragment
            }

            heroSection {
              ...HeroSectionRecordFragment
            }

            servicesSection {
              ...ServicesSectionRecordFragment
            }

            girlsSection {
              ...GirlsSectionRecordFragment
            }

            shopSection {
              ...ShopSectionRecordFragment
            }

          }

          fragment SiteFragment on Site {
            globalSeo {
              fallbackSeo {
                description
                title
                image {
                  url
                }
              }
            }
            favicon {
              url
            }
          }

          fragment HeroSectionRecordFragment on HeroSectionRecord {
            title
            url
          }

          fragment ServicesSectionRecordFragment on ServicesSectionRecord {
            title
            description
            services {
              description
              title
              prices {
                price
                time
              }
            }
          }

          fragment GirlsSectionRecordFragment on GirlsSectionRecord {
            title
            description
            girls {
              name
              date
              image {
                responsiveImage {
                  alt
                  sizes
                  height
                  src
                  srcSet
                  width
                }
              }
            }
          }

          fragment ShopSectionRecordFragment on ShopSectionRecord {
            title
            description
            image {
              responsiveImage {
                alt
                height
                sizes
                src
                srcSet
                width
              }
            }
          }
        `,
    }),
  });

  const json = (await response.json()) as { data: IData };
  return json.data;
}
