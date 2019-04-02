exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 99901, About: 'lorem ipsom smells like mimsom 1 ', url: 'aardvarkexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99902, About: 'lorem ipsom smells like mimsom 2', url: 'baboonexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99903, About: 'lorem ipsom smells like mimsom 3', url: 'capybaraexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99904, About: 'lorem ipsom smells like mimsom 4', url: 'duckexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99905, About: 'lorem ipsom smells like mimsom 5', url: 'elephantexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99906, About: 'lorem ipsom smells like mimsom 6', url: 'flying.foxexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99907, About: 'lorem ipsom smells like mimsom 7', url: 'gila.monsterexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99908, About: 'lorem ipsom smells like mimsom 8', url: 'heronexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99909, About: 'lorem ipsom smells like mimsom 9', url: 'impalaexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99910, About: 'lorem ipsom smells like mimsom 10', url: 'jerboaexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99911, About: 'lorem ipsom smells like mimsom 11', url: 'kinkajouexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99912, About: 'lorem ipsom smells like mimsom 12', url: 'lemurexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99913, About: 'lorem ipsom smells like mimsom 13', url: 'mongooseexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99914, About: 'lorem ipsom smells like mimsom 14', url: 'nyalaexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99915, About: 'lorem ipsom smells like mimsom 15', url: 'ocelotexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99916, About: 'lorem ipsom smells like mimsom 16', url: 'pandaexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99917, About: 'lorem ipsom smells like mimsom 17', url: 'quokkaexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99918, About: 'lorem ipsom smells like mimsom 18', url: 'railexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99919, About: 'lorem ipsom smells like mimsom 19', url: 'slothexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99920, About: 'lorem ipsom smells like mimsom 20', url: 'terrapinexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99921, About: 'lorem ipsom smells like mimsom 21', url: 'urialexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99922, About: 'lorem ipsom smells like mimsom 22', url: 'viscachaexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99923, About: 'lorem ipsom smells like mimsom 23', url: 'wombatexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99924, About: 'lorem ipsom smells like mimsom 24', url: 'xerusexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99925, About: 'lorem ipsom smells like mimsom 25', url: 'yakexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"},
        {id: 99926, About: 'lorem ipsom smells like mimsom 26', url: 'zebuexample.org',img_link:"https://images.unsplash.com/photo-1553531768-f617f5ba7dd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}
      ])
    })
}