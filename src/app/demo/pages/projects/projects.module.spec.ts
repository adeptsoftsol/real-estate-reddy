import { ProjectsModule } from './projects.module';

describe('ProjectsModule', () => {
  let ProjectsModule: ProjectsModule;

  beforeEach(() => {
    ProjectsModule = new ProjectsModule();
  });

  it('should create an instance', () => {
    expect(ProjectsModule).toBeTruthy();
  });
});
