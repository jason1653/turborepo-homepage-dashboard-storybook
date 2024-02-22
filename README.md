# turerepo - website / dashboard / storybook

AntDesign을 활용한 AdminDashboard 및 홈페이지 공용컴포넌트 스터디

apps 구동
```bash
pnpm run dev --filter docs
```


### home 디렉토리 webSite - sample
![screencapture-localhost-3001-2024-02-22-12_34_00.png](screencapture%2Fscreencapture-localhost-3001-2024-02-22-12_34_00.png)
![screencapture-localhost-3001-2024-02-22-12_34_30.png](screencapture%2Fscreencapture-localhost-3001-2024-02-22-12_34_30.png)
![screencapture-localhost-3001-about-2024-02-22-12_34_54.png](screencapture%2Fscreencapture-localhost-3001-about-2024-02-22-12_34_54.png)
![screencapture-localhost-3001-about-2024-02-22-12_35_11.png](screencapture%2Fscreencapture-localhost-3001-about-2024-02-22-12_35_11.png)

### home 디렉토리 webSite 구동
```bash
pnpm run dev --filter home
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
파일명 규칙: *.stories.ts
```tsx
const meta: Meta<typeof 컴포넌트> = {
    title: '제목', //스토리북 좌측메뉴에 컴포넌트 노출
    component: 컴포넌트, 
    tags: ["autodocs"], //docs 추가
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
    },
    args: {
        //컴포넌트의 props에 대한 초기값 설정
        props값: "value 값"
    }
};

export default meta;
type Story = StoryObj<typeof 컴포넌트>;


//노출할 컴포넌트
export const 컴포넌트명: Story = (args) => {
    return <컴포넌트 {...args} />;
};
```