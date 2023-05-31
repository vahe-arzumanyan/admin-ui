import pluginImg1 from '../../../assets/image/pluginImg (1).jpg'
import pluginImg2 from '../../../assets/image/pluginImg (2).jpg'
import pluginImg3 from '../../../assets/image/pluginImg (3).jpg'
import pluginImg4 from '../../../assets/image/pluginImg (4).jpg'


export const useSetting = () => {
    const pluginColor = [
        {color: 'gray', id: 1},
        {color: 'blue', id: 2},
        {color: 'green', id: 3},
        {color: 'yellow', id: 4},
        {color: 'red', id: 5},
        {color: 'magenta', id: 6}
    ]

    const pluginImg = [
        {img: pluginImg1, id: 1},
        {img: pluginImg2, id: 2},
        {img: pluginImg3, id: 3},
        {img: pluginImg4, id: 4}
    ]
    return [pluginColor, pluginImg]
}
