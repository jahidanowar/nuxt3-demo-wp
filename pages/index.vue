<script lang="ts" setup>
const { data: posts } = await useWpApi().getPosts<any>();
</script>
<template>
  <main>
    <PageHeader>
      <!-- Image  -->
      <div
        class="w-[200px] relative h-[200px] mr-5 rounded overflow-hidden shadow-md"
      >
        <img
          src="~/assets/img/elon.png"
          class="w-full h-full absolute object-cover"
        />
      </div>
      <!-- Header Text  -->
      <div>
        <h1 class="text-4xl font-bold mb-2">Elon's Musk</h1>
        <p class="mb-3">
          I built SpaceX, acquired Tesla, Twitter<br />
          In my free time i sh*t post on twitter.
        </p>
        <a
          class="btn bg-sky-500 text-sky-50 py-2 px-4 rounded inline-block hover:bg-sky-600 duration-200"
          href="https://twitter.com/elonmusk"
          >Let's Connect</a
        >
      </div>
    </PageHeader>
    <!-- Blog Grid Starts  -->
    <section class="container py-16">
      <div class="grid sm:grid-cols-3 gap-5">
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :title="post.title.rendered"
          :excerpt="post.excerpt.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :slug="post.slug"
        />
      </div>
    </section>
    <!-- Blog Grid Ends  -->
  </main>
</template>
