<script>
    import { count } from '../../stores';
    /** @type {import('./$types').PageData} */  export let data;
    
  </script>
  
  <h1>{data.post.name}
    {$count.name}
    {$count.linkedinUrl}
    {$count.githubUrl}</h1>
  <div>{@html data.post.linkedinUrl}</div>
 