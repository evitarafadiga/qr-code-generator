/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
      post: {
        name: `${params.slug}`,
        linkedinUrl: `${params.linkedinUrl} `,
        githubUrl: `${params.githubUrl}`
      }
    };
  }