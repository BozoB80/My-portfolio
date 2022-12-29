export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'workExperience'}]
        },
        {
            name:'image',
            title:'Image',
            type:'image',
            options: {
                hotspot: true,
            },
        },
    ]
}