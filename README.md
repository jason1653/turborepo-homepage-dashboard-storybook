# Turborepo Ant Design 

apps 구동
```bash
pnpm run dev --filter docs
```




### ui storybook 구동
```bash
cd packages/ui
pnpm run storybook
```


### ui 빌드
```bash
cd packages/ui
pnpm run build
```



### 스토리북 작성 예시
```jsx
const meta = {
    title: '제목', //스토리북 좌측메뉴에 컴포넌트 노출
    component: 컴포넌트, 
    tags: ["autodoc"], //docs 추가
    argsType: {
        //컴포넌트의 props에 대한 설정
        //https://storybook.js.org/docs/react/essentials/controls
        props값: {
            options: "value 값",
            control: {
                type: "select", //컨트롤 타입
                options: ["value 값", "value 값", "value 값"] //컨트롤 값
            },
        }
    }
    args: {
        //컴포넌트의 props에 대한 초기값 설정
        props값: "value 값"
    }
} as any;

export default meta;
type Story = StoryObj<typeof meta>;


//노출할 컴포넌트
export const 컴포넌트명: Story = (args) => {
    return <컴포넌트 {...args} />;
};
```