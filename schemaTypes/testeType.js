import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'AYRAN',
  title: 'title',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),

    defineField({
        name: 'foto',
        type: 'image',
      }),

      defineField({
        name: 'idade',
        type: 'number',
      }),

      defineField({
        name: 'date',
        type: 'datetime',
      }),
  ],
})