import { formatDate } from '../utils/authUtils';

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: 'c0b12fe9-80c6-4247-8ea8-3e10aa3df0fc',
    title: 'Awesome Video about Coding',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    creator: 'Shobit Deshwal',
    videoLink: '',
    like: 0,
    views: 0,
    category: [],
    uploadedAt: formatDate(),
  },
  {
    _id: 'ab3babf0-1efc-4086-aa19-4dc7ed4f0b41',
    title: 'Neural Networks from Scratch - P.1 Intro and Neuron Code',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    creator: 'Sentdex',
    videoLink: '',
    like: 10,
    views: 69,
    category: [],
    uploadedAt: formatDate(),
  },
];
